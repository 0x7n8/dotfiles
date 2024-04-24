# pacman and yay
alias update='sudo pacman -Syu'                  # update only standard pkgs
alias upgrade='sudo pacman -Syyu'                # Refresh pkglist & update standard pkgs
alias paruupdate='paru -Sua --noconfirm'         # update only AUR pkgs (paru)
alias paruupdateall='paru -Syu --noconfirm'      # update standard pkgs and AUR pkgs (paru)
alias unlock='sudo rm /var/lib/pacman/db.lck'    # remove pacman lock
alias cleanup='sudo pacman -Rns $(pacman -Qtdq)' # remove orphaned packages (DANGEROUS!)

# daily
alias nc='ncat'
alias c='clear'
alias r='ranger'
#alias n='neofetch'
alias t='thunar'
alias m='mocp -T deephouse'

# Colorize grep output (good for log files)
alias grep='grep --color=auto'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'

# custom aliases
alias el='exa'
alias et='exa --long --tree'
alias ell='exa -abghHliS'
alias l='ls -ahl --color=auto'
alias ll='ls -hl --color=auto'
# this is to prevent accidental deletion of files with rm, use \rm to actually remove, TODO: start using trash-cli
alias rm='rm -I'
alias yay='yay -a'
alias trm='trash-put'

# editing configs
#alias cfb="vim ~/.bashrc && source ~/.bashrc"
#alias cfi="vim ~/.config/i3/config"
#alias cfii="vim ~/.config/i3blocks/config"
#alias cfaw="vim ~/.config/awesome/rc.lua"
#alias dwm= "cd ~/.suckless/dwm/"
#alias st= "cd ~/.suckless/st/"
#alias dmenu= "cd ~/.suckless/dmenu/"
#alias dwmblocks= "cd ~/.suckless/dwmblocks/"
alias cff="vim ~/.config/fontconfig/fonts.conf"
alias cfv="vim ~/.vimrc"
alias cfvv="nvim ~/.config/nvim/"
alias cfp="vim ~/.config/picom.conf"

alias clc="calcurse"
alias scim="sc-im"
alias tdwn="transmission-daemon" # or mod+t to toggle it
#alias tdir="cd ~/myfiles/junk/testspace"
alias jupy="coa pyimg;jupyter notebook"
alias npc="ncmpcpp"
alias playalert="mpv --really-quiet ~/.local/share/sounds/complete.ogg"
# alias ytdl="youtube-dl -f 'bestvideo[height<=720]+bestaudio' -o '%(title)s.%(ext)s'"
# alias ytdl-mp3="youtube-dl --extract-audio --audio-format mp3 --audio-quality 0 -o '%(title)s.%(ext)s'"
alias ytdlist="youtube-dl -f 'bestvideo[height<=720]+bestaudio' -o '%(playlist_index)s-%(title)s.%(ext)s'"
alias ytdl="yt-dlp --compat-options youtube-dl -f 'bestvideo[height<=720]+bestaudio' -o '%(title)s.%(ext)s'"
alias ytdl-mp3="yt-dlp --compat-options youtube-dl --extract-audio --audio-format mp3 --audio-quality 0 -o '%(title)s.%(ext)s'"
#alias ctodo="vim ~/myfiles/todo.md"
alias vki="vim -c ':VimwikiIndex'"
alias vimwiki="vim -c ':VimwikiIndex'"
alias zth="zathura"

alias xdgo="xdg-open"

# for setting default scale as 4 in bc
#alias bc="BC_ENV_ARGS=<(echo "scale=4") \bc"

# xclip cmds are hard to remember!
alias xclipp="xclip -i -selection primary"
alias xclipc="xclip -i -selection clip"

# code editor aliases
alias v="vim"
alias vv="nvim"
alias nv="nvim"
alias nf="neofetch"
alias pf="pfetch"
alias tf="treefetch"
alias tfb="treefetch -b"

# a quick hack to store quicknotes, now replaced by vimwiki
# alias qnl="vim ~/myfiles/junk/qnotes"
alias ytp="youtube-viewer -n --no-video-info --player=mpv"
# life improvements
#alias update="sudo pacman -Syu"
alias myip="curl ipinfo.io/ip"
#alias cwall="feh --bg-fill --randomize ~/myfiles/wallpapers/*;clear"
alias lm="ls -tlh"
alias passgh="pass github-pat | xclip -i -r -sel clipboard"
alias coa="conda activate"
alias mpvq="mpv --no-video"
alias torrentt="toggleq transmission-daemon"

# translate-shell aliases
alias define="trans -d -v --pager=bat"
alias translate="trans -b"

alias nnn="nnn -rc"
alias n="nnn -rc"
alias nn="nnn -r"
alias nnp="nnn -r -P p"
export NNN_FIFO="/tmp/nnn.fifo"
export NNN_BMS='m:~/.config/nnn/mounts;b:~/myfiles/blog;y:~/myfiles/projects/pyimg/pyimgbook;g:~/myfiles/projects/github;w:~/myfiles/wallpapers;j:~/myfiles/junk;p:~/myfiles/projects;u:/run/media/pritom;d:~/Downloads/;b:~/myfiles/bluetooth;P:~/myfiles/pdfs;s:~/myfiles/scripts;'
export NNN_OPENER=$HOME/.config/nnn/plugins/nuke
# nnn theme
BLK="04" CHR="04" DIR="04" EXE="00" REG="00" HARDLINK="00" SYMLINK="06" MISSING="00" ORPHAN="01" FIFO="0F" SOCK="0F" OTHER="02"
export NNN_FCOLORS="$BLK$CHR$DIR$EXE$REG$HARDLINK$SYMLINK$MISSING$ORPHAN$FIFO$SOCK$OTHER"


# Tulis Menulis
alias cal="calcurse"
alias dd="dooit"

# Nganime Mode Coy
alias wibu="ani-cli"
alias manga="manga-cli"