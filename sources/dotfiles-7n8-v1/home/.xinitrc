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
# wallpaper *Jangan lupa off nitrogen
#back4.sh 0.003 ~/Pictures/gif1.gif
#xgifwallpaper -v -s FILL ~/Pictures/gif1.gif
xgifwallpaper -s FILL ~/Pictures/gif1.gif &

dwmblocks &

#/usr/local/bin/dwmblocks &

picom -CGb &

xrdb .Xresources &

#nitrogen --restore &

xset dpms 180 &

xss-lock -- slock &

/home/7n8/.conky/Mainte/conky-launch.sh

exec dwm


