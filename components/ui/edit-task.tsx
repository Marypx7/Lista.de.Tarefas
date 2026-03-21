import { SquarePen } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Button } from "./button"
import { Input } from "./input"

const EditTask = () => {
    return (
        <Dialog >
                <DialogTrigger asChild>
                    <SquarePen size={16} className="cursor-pointer"/>
                </DialogTrigger>

                <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar tarefa</DialogTitle>
                </DialogHeader>
                <div className="flex gap-2">
                    <Input
                        placeholder="Editar tarefa"
                        className="flex px-2 py-2"
                    />
                    <Button className="cursor-pointer">Editar</Button>
                </div>
                </DialogContent>
                </Dialog>
    )
 
}

export default EditTask