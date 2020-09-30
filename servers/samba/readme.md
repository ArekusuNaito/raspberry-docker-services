# Readme

## About the smb.file

The `smb.conf` file I am using, is, from my understanding, one of the most minimal configurations to make work a samba service. While you can have a complex configuration you can use this simple configuration that just requires one user and one group to make your shared folders work.

## Configuration Notes

- The minimal configuration port is 445, this is for the shared windows network drive.
- The reason why we don't use the SMB1 protocol is because its vulnerability for older windows systems, they use ports 137-139.
- **The `samba user` and `samba group` IDs must match for the docker container.**
    - This is why we add the `groupadd` and the `useradd` commands on the dockerfile.
    - If you change the ownership of the shared folders from inside your docker, and those shared folders are actually on your host, the moment you do a `chown` on the docker container, the host will reflect this change with a `systemd-coredump` ownership.
    - It seems that as long as you have the same `user id` and the same `group id` on both the shared folders inside the docker-container and the docker
- An optimization can be added as an environment variable to the docker container where you can custom add your explicit group and user IDs.
- To add `simulated` ownership of a `FAT32` file system you have to `mount` your external drive with specific `user and group IDs`.
    - `sudo mount -t vfat /dev/sda1 /st orage/usb1  -o rw,uid=7777,gid=7777`
- It is highly suggested that you format your External Drives with `exFAT` instead of `FAT32`. To mount a `exFat` you would do like in a similar way
    - `sudo mount -t exfat /dev/sda1 /st orage/usb1  -o rw,uid=7777,gid=7777`
- Windows and MAC own File Systems are not recommended, although its possible to use them.
    - Windows can use the `mount -t ntfs-3g`



- You want to add a group with an **explicit ID**:
```
 sudo groupadd sambagroup -g 7777
```
- You want to add a user with an **explicit ID**:
```
sudo useradd --no-create-home -- group sambagroup -s /bin/false -u 7777 sambauser
```

