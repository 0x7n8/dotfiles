#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '

[ -f ~/.fzf.bash ] && source ~/.fzf.bash
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

if [ -f ~/.aliases ]; then
        . ~/.aliases
fi
