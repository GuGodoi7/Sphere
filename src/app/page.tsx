import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <nav className="absolute right-4 top-4">
        <ModeToggle/>
      </nav>

      <aside className="h-screen overflow-hidden hidden lg:block">
        <img src="/login.png" alt="imagem de login"/>
      </aside>

      <section className="flex flex-col items-center w-full gap-8">
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37.5" cy="37.5" r="37.5" fill="#E11D48"/>
        </svg>

        <h1 className="text-4xl font-extrabold uppercase">Sphere</h1>
        <Tabs defaultValue="entrar">
          <TabsList>
            <TabsTrigger value="entrar">Entrar</TabsTrigger>
            <TabsTrigger value="registrar">Registrar</TabsTrigger>
          </TabsList> 

        <TabsContent value="entrar">
          <form>
            <div>
              <Label htmlFor="email">email</Label>
              <Input id="email" placeholder="email@servidor.com"/>
            </div>
            <div>
              <Label htmlFor="senha">senha</Label>
              <Input id="senha" type="password"/>
            </div>
            <Button>Entrar</Button>
          </form>
        </TabsContent>

        <TabsContent value="registrar">
        <form>
            <div>
              <Label htmlFor="email">Nome</Label>
              <Input id="Nome" />
            </div>
            <div>
              <Label htmlFor="bio">bio</Label>
              <Input id="bio" />
            </div>
            <div>
              <Label htmlFor="email">email</Label>
              <Input id="email" placeholder="email@servidor.com"/>
            </div>
            <div>
              <Label htmlFor="senha">senha</Label>
              <Input id="senha" type="password"/>
            </div>
            <Button>Criar Conta</Button>
          </form>
        </TabsContent>
        </Tabs>
      </section>

    </main>
  );
}
