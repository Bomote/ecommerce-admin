"use client";

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs"

const setupPage = () => {
  return (
   <div className="p-10">
    <Modal title="Test" description="Test" isOpen onClose={()=>{}}>
      children
    </Modal>
   </div>
  )
}

export default setupPage
