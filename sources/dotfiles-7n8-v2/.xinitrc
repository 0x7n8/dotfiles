#!/bin/sh

userresources=$HOME/.Xresources
usermodmap=$HOME/.Xmodmap
sysresources=/etc/X11/xinit/.Xresources
sysmodmap=/etc/X11/xinit/.Xmodmap

# merge in defaults and keymaps

if [ -f $sysresources ]; then







    xrdb -merge $sysresources

fi

if [ -f $sysmodmap ]; then
    xmodmap $sysmodmap
fi

if [ -f "$userresources" ]; then







    xrdb -merge "$userresources"

fi

if [ -f "$usermodmap" ]; then
    xmodmap "$usermodmap"
fi

# start some nice programs

if [ -d /etc/X11/xinit/xinitrc.d ] ; then
 for f in /etc/X11/xinit/xinitrc.d/?*.sh ; do
  [ -x "$f" ] && . "$f"
 done
 unset f
fi

#twm &
#xclock -geometry 50x50-1+1 &
#xterm -geometry 80x50+494+51 &
#xterm -geometry 80x20+494-0 &
#exec xterm -geometry 80x66+0+0 -name login

# DWM
# wallpaper *Jangan lupa off nitrogen

#back4.sh 0.003 ~/Pictures/gif1.gif

#xgifwallpaper -v -s FILL ~/Pictures/gif1.gif

xgifwallpaper -s FILL ~/Pictures/gif1.gif & # wallpaper

dwmblocks & # dwmblocks

#/usr/local/bin/dwmblocks &

picom -CGb & # compositor

xrdb .Xresources & # Xresources

#nitrogen --restore &

xset dpms 180 & # dpms

xss-lock -- slock & # lock screen

~/.conky/Mainte/conky-launch.sh # conky


exec dwm # dwm
