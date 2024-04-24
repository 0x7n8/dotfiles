#!/bin/bash

# Pastikan script dijalankan sebagai root
if [[ $(id -u) != "0" ]]; then
    printf "\n\nError: This script must be run as root\n\n"
    exit
fi

# Mengembalikan konfigurasi Grub yang asli dari backup
printf "\n - Restoring original Grub configuration...\n"
cp /etc/default/grub.backup /etc/default/grub

# Menghapus tema dan entri menu kustom
printf "\n - Removing custom Grub theme and menu entries...\n"
rm -rf /boot/grub/themes/grub_gtg
rm /etc/grub.d/40_custom

# Memperbarui konfigurasi Grub
printf "\n - Updating Grub configuration...\n\n"
if command -v update-grub >> /dev/null; then
    update-grub    # Untuk distribusi Debian-based
elif command -v grub-mkconfig >> /dev/null; then
    grub-mkconfig -o /boot/grub/grub.cfg    # Untuk distribusi lainnya
elif command -v grub2-mkconfig >> /dev/null; then
    if command -v zypper >> /dev/null; then
        grub2-mkconfig -o /boot/grub2/grub.cfg    # Untuk openSUSE
    elif command -v dnf; then
        grub2-mkconfig -o /boot/efi/EFI/fedora/grub.cfg   # Untuk Fedora
    fi
fi

printf "\n - Grub configuration restored to default\n\n"
