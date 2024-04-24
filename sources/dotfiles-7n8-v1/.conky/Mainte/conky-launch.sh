#!/bin/env sh

killall conky

#conky -c $HOME/.config/conky/conkyrc-dark-bspwm &
conky -c ~/.conky/Mainte/conky_bspwm &
sleep 0.8
#conky -c $HOME/.config/conky/conkyrc-dark-bg &
conky -c ~/.conky/Mainte/conky_darkbg &
