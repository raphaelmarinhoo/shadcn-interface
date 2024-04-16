import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ride from "../assets/ride.svg";
import ride2 from "../assets/ride-2.svg";
import ride3 from "../assets/ride-3.svg";

export function SignIn() {
  return (
    <>
      <main className="h-screen flex w-full">
        <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
          <Carousel className="w-full max-w-xl">
            <CarouselContent>
              <CarouselItem>
                <div className="flex aspect-square bg-background rounded p-8">
                  <img src={ride} alt="Rastreio de Carro" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex aspect-square bg-background rounded p-8">
                  <img src={ride2} alt="Economia" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex aspect-square bg-background rounded p-8">
                  <img src={ride3} alt="Manutenção" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold tracking-tighter">
                Entre com sua conta
              </CardTitle>
              <CardDescription>
                Utilize seu e-mail e senha ou o Github para entrar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemplo@email.com"
                ></Input>
              </div>
              <div className="mt-4">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Sua Senha"
                ></Input>
              </div>
              <Button className="mt-6 w-full">Entrar</Button>
              <div className="flex items-center gap-6 mt-4">
                <Separator />
                <span className="text-xs text-muted-foreground">OU</span>
                <Separator />
              </div>
              <Button variant="outline" className="mt-4 w-full">
                <GitHubLogoIcon className="mr-2" />
                Entrar com o Github
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-muted-foreground text-center text-sm">
                Ao entrar em nossa plataforma, você concorda com nossos termos
                de uso e politica de privacidade.
              </p>
            </CardFooter>
          </Card>
        </section>
      </main>
    </>
  );
}
