#!/bin/sh

# Setup environment using sudo
sudo cp rc.local /etc/rc.local && chmod 755 /etc/rc.local
sudo cp config.txt /boot/config.txt && chmod 755 /etc/rc.local
sudo cp xinitrc /boot/xinitrc && chmod 755 /etc/rc.local

# remove sudo without password
# change password for pi user

# Create update task in cron that runs as normal user
echo "* * * * * '`pwd`/update.sh'" | crontab -u $USER -
