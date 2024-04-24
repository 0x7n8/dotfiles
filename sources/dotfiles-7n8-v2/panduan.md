# Cara Penggunaan Laptop Ini
# Powered by: Arch + DWM 

# Untuk cek battery health command output:
sudo tlp-stat -b

# Battery control:
auto-cpufreq --stats

# Untuk sinyal otomatis:
nmtui

# Sinyal manual apabila crash:
nmcli connection
sudo nmcli dev wifi connect <nama wifi> password <password>

# Untuk keperluan Update
sudo pacman -Syu
sudo pacman -Syyu
sudo pacman -Sy
sudo pacman -Syuu
sudo pacman -Ss # buat mengecek program atau apk

# DWM COntrol
MODKEY      + Return                = st terminal
MODKEY      + spasi                 = dmenu
Mod1        + p                     = rofi
MODKEY      + kiri / kanan          = pindah workspace
MODKEY      + Shift     + e         = pilihan exit
MODKEY      + Shift     + q         = Refresh dwm

# Daily
spt = spotify
prtsc = screenshot

# fonts
fc-cache -f -v | #habis download taro di .fonts trs command ini.

# VPN
warp-cli connect
warp-cli disconnect

# Grub
sudo grub-mkconfig -o /boot/grub/grub.cfg # (Untuk menambahkan windows atau os lain)

# Musikan 
<musik dri youtube nih>
ytp (nama lagu loe trs pilih nomernya)

# Catatan Kayak Notion
vimwiki = command masuk ke vim :VimWikiIndex / Vimwiki*File elu nnti dibuatin

calcurse = todo list ada kalendernya
command: cal

dooit command : dd

# Mode wibu
ani-cli
wibu = nonton anime

manga-cli
manga = baca manga

# To check all applications installed on your Arch Linux system and report them into a file named "packages.txt", you can use the following command:
pacman -Qqe > packages.txt




