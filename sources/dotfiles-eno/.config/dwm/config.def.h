static const unsigned int borderpx = 2;   /* border pixel of windows */
static const unsigned int snap     = 32;  /* snap pixel */
static const unsigned int gappih    = 11;       /* horiz inner gap between windows */
static const unsigned int gappiv    = 11;       /* vert inner gap between windows */
static const unsigned int gappoh    = 11;       /* horiz outer gap between windows and screen edge */
static const unsigned int gappov    = 11;       /* vert outer gap between windows and screen edge */
static const int smartgaps          = 0;        /* 1 means no outer gap when there is only one window */
static const unsigned int gappx    = 1;   /* pixel gap between clients */
static const int showbar           = 1;   /* 0 means no bar */
static const int topbar            = 1;   /* 0 means bottom bar */
static const int horizpadbar       = 0;   /* horizontal padding for statusbar */
static const int vertpadbar        = 0;   /* vertical padding for statusbar */
/* Mononoki Nerd Font must be installed from AUR nerd-fonts-complete.
 * Otherwise, your default font will be Hack which is found in the standard
 * Arch repos and is listed as a dependency for this build. JoyPixels is also:while
 * a hard dependency and makes colored fonts and emojis possible.
 */

/* static const char *fonts[]     = {"SauceCodePro Nerd Font Mono:weight=bold:size=9:antialias=true:hinting=true","SymbolsNerdFont:size=10:antialias=true:autohint=true","NotoColorEmoji:size=11:antialias=true:autohint=true"};*/


static const char *fonts[]     = { "SymbolsNerdFont:size=11:antialias=true:autohint=true", "FuraCode Nerd Font:style=Medium:size=9" };


static const char col_1[]  = "#44475a"; /* background color of bar */
static const char col_2[]  = "#44475a"; /* border color unfocused windows */
static const char col_3[]  = "#f8f8f2";
static const char col_4[]  = "#be4949"; /* border color focused windows and tags  #815757 */
/* bar opacity
 * 0xff is no transparency.
 * 0xee adds wee bit of transparency.
 * 0xdd adds adds a bit more transparency.
 * Play with the value to get desired transparency.
 */
static const unsigned int baralpha    = 0xff;
static const unsigned int borderalpha = OPAQUE;
static const char *colors[][3]        = {
	/*               fg         bg         border   */
	[SchemeNorm] = { col_3, col_1, col_2 },
	[SchemeSel]  = { col_3, col_2, col_4 },
};
static const unsigned int alphas[][3] = {
	/*               fg      bg        border     */
	[SchemeNorm] = { OPAQUE, baralpha, borderalpha },
	[SchemeSel]  = { OPAQUE, baralpha, borderalpha },
};

/* tagging */
/* static const char *tags[] = { "1", "2", "3", "4", "5", "6", "7", "8", "9" }; */
/* static const char *tags[] = { "", "", "", "", "", "", "", "", "" }; */
static const char *tags[] = { "", "", "", "", "", "", "", "", "" };

static const Rule rules[] = {
	/* xprop(1):
	 *	WM_CLASS(STRING) = instance, class
	 *	WM_NAME(STRING) = title
	 */
	/* class      instance    title       tags mask     isfloating   monitor */
	{ "Gimp",     NULL,       NULL,       0,            1,           -1 },
	{ "Firefox",  NULL,       NULL,       1 << 8,       0,           -1 },
};

/* layout(s) */
static const float mfact     = 0.50; /* factor of master area size [0.05..0.95] */
static const int nmaster     = 1;    /* number of clients in master area */
static const int resizehints = 0;    /* 1 means respect size hints in tiled resizals */

#include "layouts.c"
static const Layout layouts[] = {
	/* symbol     arrange function */
	{ "[]=",      tile },    /* first entry is default */
	{ "><>",      NULL },    /* no layout function means floating behavior */
	{ "[M]",      monocle },
	{ "HHH",      grid },
	{ NULL,       NULL },
};

/* key definitions */
#define MODKEY Mod4Mask
#define TAGKEYS(CHAIN,KEY,TAG) \
	{ MODKEY,                       CHAIN,    KEY,      view,           {.ui = 1 << TAG} }, \
	{ MODKEY|ControlMask,           CHAIN,    KEY,      toggleview,     {.ui = 1 << TAG} }, \
	{ MODKEY|ShiftMask,             CHAIN,    KEY,      tag,            {.ui = 1 << TAG} }, \
	{ MODKEY|ControlMask|ShiftMask, CHAIN,    KEY,      toggletag,      {.ui = 1 << TAG} },
#define CMD(cmd) { .v = (const char*[]){ "/bin/sh", "-c", cmd, NULL } }

/* helper for spawning shell commands in the pre dwm-5.0 fashion */
#define SHCMD(cmd) { .v = (const char*[]){ "/bin/sh", "-c", cmd, NULL } }

/* dmenu */
static char dmenumon[2] = "0"; /* component of dmenucmd, manipulated in spawn() */
/* If you are using the standard dmenu program, use the following. */
static const char *dmenucmd[]    = { "dmenu_run", "-p", "Run: ", NULL };

/* If you are using the dmenu-distrotube-git program, use the following for a cooler dmenu! */
/* static const char *dmenucmd[]    = { "dmenu_run", "-g", "10", "-l", "48", "-p", "Run: ", NULL };
*/
/* the st terminal with tabbed */
static const char *termcmd[]     = { "st", NULL };
/* An alternative way to launch st along with the fish shell */
/* static const char *termcmd[]     = { "st", "-e fish", NULL }; */
static const char *tabtermcmd[]  = { "tabbed", "-r", "2", "st", "-w", "''", NULL };
static const char *roficmd[] = { "rofi", "-show", "drun", "-show-icons", "-config", "~/.config/rofi/themes/rasi.blue", NULL };

static Key keys[] = {
	/* modifier             chain key  key        function        argument */
	{ MODKEY|ShiftMask,     -1,        XK_Return, spawn,          {.v = dmenucmd } },
	{ MODKEY,               -1,        XK_Return, spawn,          {.v = termcmd } },
        { Mod1Mask,             -1,        XK_p,      spawn,          {.v = roficmd } },
	{ Mod1Mask,             -1,        XK_Return, spawn,          {.v = tabtermcmd } },
	{ MODKEY,               -1,        XK_b,      togglebar,      {0} },
	{ MODKEY|ShiftMask,     -1,        XK_j,      rotatestack,    {.i = +1 } },
	{ MODKEY|ShiftMask,     -1,        XK_k,      rotatestack,    {.i = -1 } },
	{ MODKEY,               -1,        XK_j,      focusstack,     {.i = +1 } },
	{ MODKEY,               -1,        XK_k,      focusstack,     {.i = -1 } },
	{ MODKEY,               -1,        XK_i,      incnmaster,     {.i = +1 } },
	{ MODKEY,               -1,        XK_d,      incnmaster,     {.i = -1 } },
	{ MODKEY,               -1,        XK_h,      setmfact,       {.f = -0.05} },
	{ MODKEY,               -1,        XK_l,      setmfact,       {.f = +0.05} },
	
	{ MODKEY|Mod4Mask,       -1,      	XK_h,      incrgaps,       {.i = +1 } },
        { MODKEY|Mod4Mask,       -1,       	XK_l,      incrgaps,       {.i = -1 } },
        { MODKEY|Mod4Mask|ShiftMask, -1,	XK_h,      incrogaps,      {.i = +1 } },
        { MODKEY|Mod4Mask|ShiftMask,    -1,	XK_l,      incrogaps,      {.i = -1 } },
        { MODKEY|Mod4Mask|ControlMask,  -1,	XK_h,      incrigaps,      {.i = +1 } },
        { MODKEY|Mod4Mask|ControlMask,  -1,	XK_l,      incrigaps,      {.i = -1 } },
        { MODKEY|Mod4Mask,              -1,	XK_0,      togglegaps,     {0} },
        { MODKEY|Mod4Mask|ShiftMask,    -1,	XK_0,      defaultgaps,    {0} },
        { MODKEY,                       -1,	XK_y,      incrihgaps,     {.i = +1 } },
        { MODKEY,                       -1,	XK_o,      incrihgaps,     {.i = -1 } },
        { MODKEY|ControlMask,           -1,	XK_y,      incrivgaps,     {.i = +1 } },
        { MODKEY|ControlMask,           -1,	XK_o,      incrivgaps,     {.i = -1 } },
        { MODKEY|Mod4Mask,              -1,	XK_y,      incrohgaps,     {.i = +1 } },
        { MODKEY|Mod4Mask,              -1,	XK_o,      incrohgaps,     {.i = -1 } },
        { MODKEY|ShiftMask,             -1,	XK_y,      incrovgaps,     {.i = +1 } },
        { MODKEY|ShiftMask,             -1,	XK_o,      incrovgaps,     {.i = -1 } },

	{ MODKEY|ControlMask,   -1,        XK_Return, zoom,           {0} },
	{ MODKEY,               -1,        XK_Tab,    view,           {0} },
	{ MODKEY|ShiftMask,     -1,        XK_c,      killclient,     {0} },


    /* Layout manipulation */
	{ MODKEY,               -1,        XK_Tab,    cyclelayout,    {.i = -1 } },
	{ MODKEY|ShiftMask,     -1,        XK_Tab,    cyclelayout,    {.i = +1 } },
	{ MODKEY,               -1,        XK_space,  setlayout,      {0} },
	{ MODKEY|ShiftMask,     -1,        XK_space,  togglefloating, {0} },

    /* Switch to specific layouts */
	{ MODKEY,               -1,        XK_t,      setlayout,      {.v = &layouts[0]} },
	{ MODKEY,               -1,        XK_f,      setlayout,      {.v = &layouts[1]} },
	{ MODKEY,               -1,        XK_m,      setlayout,      {.v = &layouts[2]} },
	{ MODKEY,               -1,        XK_g,      setlayout,      {.v = &layouts[3]} },

	{ MODKEY,               -1,        XK_0,      view,           {.ui = ~0 } },
	{ MODKEY|ShiftMask,     -1,        XK_0,      tag,            {.ui = ~0 } },

    /* Switching between monitors */
	{ MODKEY,               -1,        XK_comma,  focusmon,       {.i = -1 } },
	{ MODKEY,               -1,        XK_period, focusmon,       {.i = +1 } },
	{ MODKEY|ShiftMask,     -1,        XK_comma,  tagmon,         {.i = -1 } },
	{ MODKEY|ShiftMask,     -1,        XK_period, tagmon,         {.i = +1 } },
	
    /* Keybindings for programs using the format SUPER + ALT + "key" */
        { MODKEY|Mod1Mask,      -1,        XK_g,      spawn,          CMD("surf google.com") },
        { MODKEY|Mod1Mask,      -1,        XK_m,      spawn,          CMD("tabbed -r 2 surf  duckduckgo.com/?q=") },
        { MODKEY|Mod1Mask,      -1,        XK_l,      spawn,          CMD("surf linkedin.com") },
        { MODKEY|Mod1Mask,      -1,        XK_i,      spawn,          CMD("surf instgaram.com") },
        { MODKEY|Mod1Mask,      -1,        XK_w,      spawn,          CMD("surf web.whatsapp.com") },
        { MODKEY|Mod1Mask,      -1,        XK_t,      spawn,          CMD("surf twitter.com") },
        { MODKEY|Mod1Mask,      -1,        XK_b,      spawn,          CMD("chromium") },
        { MODKEY|Mod1Mask,      -1,        XK_c,      spawn,          CMD("telegram-desktop") },
        { MODKEY|Mod1Mask,      -1,        XK_f,      spawn,          CMD("pcmanfm") },


	TAGKEYS(                -1,        XK_1,                      0)
	TAGKEYS(                -1,        XK_2,                      1)
	TAGKEYS(                -1,        XK_3,                      2)
	TAGKEYS(                -1,        XK_4,                      3)
	TAGKEYS(                -1,        XK_5,                      4)
	TAGKEYS(                -1,        XK_6,                      5)
	TAGKEYS(                -1,        XK_7,                      6)
	TAGKEYS(                -1,        XK_8,                      7)
	TAGKEYS(                -1,        XK_9,                      8)
	{ MODKEY|ShiftMask,     -1,        XK_q,	  quit,		      {0} },
    { MODKEY|ShiftMask,     -1,        XK_r,      quit,           {1} },
};

/* button definitions */
/* click can be ClkTagBar, ClkLtSymbol, ClkStatusText, ClkWinTitle, ClkClientWin, or ClkRootWin */
static Button buttons[] = {
	/* click           event mask   button          function        argument */
	{ ClkLtSymbol,     0,           Button1,        setlayout,      {0} },
	{ ClkLtSymbol,     0,           Button3,        setlayout,      {.v = &layouts[2]} },
	{ ClkWinTitle,     0,           Button2,        zoom,           {0} },
	{ ClkStatusText,   0,           Button2,        spawn,          {.v = termcmd } },
	{ ClkClientWin,    MODKEY,      Button1,        movemouse,      {0} },
	{ ClkClientWin,    MODKEY,      Button2,        togglefloating, {0} },
	{ ClkClientWin,    MODKEY,      Button3,        resizemouse,    {0} },
	{ ClkTagBar,       0,           Button1,        view,           {0} },
	{ ClkTagBar,       0,           Button3,        toggleview,     {0} },
	{ ClkTagBar,       MODKEY,      Button1,        tag,            {0} },
	{ ClkTagBar,       MODKEY,      Button3,        toggletag,      {0} },
};
