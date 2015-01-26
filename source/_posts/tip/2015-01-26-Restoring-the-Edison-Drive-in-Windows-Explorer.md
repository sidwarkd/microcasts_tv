type: tip
title: Restoring the Edison Drive in Windows Explorer
categories:
  - tips
date: 2015-01-26 12:21:41
video: CGzgu-i6R_A
permalink: restoring-edison-drive-in-windows-explorer
tags: [Edison]
---

So you've flashed your Edison and now, when you plug it in, it doesn't show up as a drive anymore in Windows explorer. At first you might think you broke something but it's not you, it's Windows. It actually knows the drive is there and in this video I show you how to get it to show up again in Explorer. For those that like the written word over video, here are the steps.

  1. Launch the Disk Management tool in Windows.
  2. Find the Edison Disk which should show up as an Unallocated disk between 500 and 800 MB.
  3. Right click on the disk and select **Create New Simple Volume**. This will open the New Simple Volume Wizard
  4. Click Next.
  5. Click Next
  6. Change the drive letter assignment if you want and click Next.
  7. Change the format file system from NTFS to **FAT32**.
  8. Give your Edison volume a name.
  9. Click Next.
  10. Click Next on the last screen and Windows will start creating the new volume. 

  The volume creation can take a few minutes so just be patient. After that the drive will show up again in Windows Explorer.
