import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function HeroBlock() {
    return (
        <div className="layout-global">
            <h1>hero block</h1>
            <Input className="max-w-[200px]" placeholder="Enter text" />
            <Button asChild>
                <Link href="/login">Login</Link>
            </Button>
            <Card size="sm" className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Small Card</CardTitle>
                    <CardDescription>
                    This card uses the small size variant.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                    The card component supports a size prop that can be set to
                    &quot;sm&quot; for a more compact appearance.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                    Action
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}