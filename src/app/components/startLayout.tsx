import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function StartLayout() {
  return (
    <div className="flex md:flex-row w-[60%] h-[50%] bg-gradient-to-r rounded-xl relative top-8 left-8 shadow-lg overflow-hidden md:p-6">
      <div className="relative w-96 h-96 ">
        <img
          src="https://avatars.githubusercontent.com/u/92307537?s=400&u=23303c45284658483e5c271885e4af743bd861d4&v=4"
          alt="Cool Monkey"
          className="w-[350px] h-full object-cover rounded-xl"
          style={{ aspectRatio: "350/350", objectFit: "cover" }}
        />

        <div className="absolute top-3 right-8 bg-black bg-opacity-60 text-white text-xs font-semibold py-1 px-2 rounded-lg">
          Aadarsh  Nagrath
        </div>
        <div className=" absolute bottom-3 left-3 bg-white bg-opacity-80 p-3 rounded-lg shadow-lg ">
          <p className="text-gray-700 text-sm">Current Bid</p>
          <p className="text-xl font-bold text-blue-500">1.52 ETH</p>
          <p className="text-gray-500 text-xs">$4,464.29</p>
          <Button className="mt-2 w-full bg-blue-500 text-white">Bid Now</Button>
        </div>
      </div>
      <div>
      <Tabs defaultValue="about" className="w-[600px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="about">ABOUT</TabsTrigger>
        <TabsTrigger value="skills">SKILLS</TabsTrigger>
        <TabsTrigger value="achieve">ACHIEVEMENTS</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <Card>
      <div className="w-full p-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">About me</h2>
        <p className="text-gray-600 mb-4">
            Passionate Software Engineer with expertise in full-stack development, cloud computing, and DevOps. Currently pursuing a Bachelor of Engineering in Computer Science with a specialization in Cloud Computing at Chandigarh University.
        </p>
        <p className="text-gray-600 mb-4">
            I have contributed to multiple open-source projects, including leading contributions to the Plone Foundation. I also have experience in developing and deploying scalable applications in a professional environment, with a strong focus on CI/CD pipelines and container orchestration.
        </p>
        
        <div className="flex items-center justify-between space-x-3">
          <div>
            <p className="text-sm text-gray-500"><b>Developer & Programmer</b></p>
            <p className="text-gray-800 font-semibold">Aadarsh Nagrath</p>
          </div>
          <Button variant="outline" className="ml-auto flex gap-2 ">
          <ion-icon name="logo-github" style={{ fontSize: '24px' }}></ion-icon>
            Projects
          </Button>
        </div>
      </div>
        </Card>
      </TabsContent>

      <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardTitle>SKILLS</CardTitle>
            <CardDescription>
              Add skills in this section
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="achieve">
        <Card>
          <CardHeader>
            <CardTitle>ACHIEVEMENTS</CardTitle>
            <CardDescription>
            Add Achievements in this section in this section
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
      </div>
    </div>
  );
}
