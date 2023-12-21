"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'

const UploadButton = () => {
  
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    return (
    <Dialog onOpenChange={(v) => {
        if(!v) {
            setIsOpen(v)
        }
    }} open={isOpen}>
        <DialogTrigger onClick={() => setIsOpen(true)} asChild>
            <Button variant="default" size="lg">Click here</Button>
        </DialogTrigger>
        <DialogContent>
            This is just the starter piece of component where anyone can create it by simple method learned by everyone
        <DialogFooter>
            -By Nikhil Mishra
        </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default UploadButton