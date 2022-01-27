!#bin/bash
wget https://github.com/GloriousEggroll/wine-ge-custom/releases/download/6.16-2-GE-LoL/lutris-ge-6.16-2-lol-x86_64.tar.xz
tar -xf lutris-ge-6.16-2-lol-x86_64.tar.xz
mkdir ~/.LeagueOfLegends
mv lutris-ge-6.16-2-lol-x86_64 ~/.LeagueOfLegends
rm -rf lutris-ge-6.16-2-lol-x86_64.tar.xz
WINEARCH="win32" WINEPREFIX="~/LeagueOfLegends/prefix ./lutris-ge-6.16-2-lol-x86-64/bin/wineboot
