import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import { Plus, List, CircleSlash, Check, SquarePen, Trash,  ListChecks, Sigma } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import EditTask from "@/components/ui/edit-task";

const Home = () => {
  return <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
    <Card className="w-lg p-4">
    <CardHeader className="flex gap-2">
      <Input placeholder="Adicionar tarefa"/>
      <Button variant="default" className="cursor-pointer"><Plus /> Cadastrar</Button>
    </CardHeader>

    <CardContent>
      <Separator className="mb-2"/>
        <div className="flex gap-2">
          <Badge className="cursor-pointer" variant="default"><List />Todas</Badge>
          <Badge className="cursor-pointer" variant="outline"><CircleSlash />Não finalizadas</Badge>
          <Badge className="cursor-pointer" variant="outline"><Check />Concluídas</Badge>
        </div>

        <div className="mt-4 border-b">

            <div className="h-14 flex justify-between items-center border-t">
              <div className="w-1 h-full bg-green-300"> </div>
                <p className="flex-1 px-2 text-sm" >Estudar React</p>
                <div  className="flex gap-2 items-center">

                <EditTask />

                
                <Trash size={16} className="cursor-pointer"/>
              </div>
            </div>
        </div>


        <div className="flex justify-between mt-4">
          <div className="flex gap-2 items-center">
          <ListChecks size={18}/>
          <p className="text-sm">Tarefas concluídas (3/3)</p>
          </div>
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="text-xs h-7 cursor-pointer" variant="outline"><Trash />Limpar tarefas concluídas</Button>
            </AlertDialogTrigger>
                
            <AlertDialogContent>
              <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza que deseja excluir x itens?</AlertDialogTitle>

            <AlertDialogDescription>
                Essa função apaga tarefas anteriores
            </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogAction>Continue</AlertDialogAction>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>

          </AlertDialogContent>
      </AlertDialog>
          
        </div>

        <div className="h-2 w-full bg-gray-200 mt-4 rounded-md">
          <div className="h-full w-[50%] bg-blue-500 rounded-md" style={{width:"50%"}}></div>
        </div>

        <div className="flex justify-end items-center mt-2 gap-2">
          <Sigma size={18} />
          <p className="text-xs">3 Tarefas no total</p>
        </div>

        
        
    </CardContent>
    
    
    
</Card>
  </main>;
};

export default Home;