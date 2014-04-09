#!/bin/sh

# Setup environment using sudo
sudo cp rc.local /etc/rc.local && sudo chmod 755 /etc/rc.local
sudo cp config.txt /boot/config.txt && sudo chmod 755 /boot/config.txt
sudo cp xinitrc /boot/xinitrc && sudo chmod 755 /boot/xinitrc

# Create update task in cron that runs as normal user
echo "* * * * * '`pwd`/update.sh'" | crontab -u $USER -
