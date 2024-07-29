import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {profileSchema} from "@/schema/profileSchema"


const form=useForm({
  resolver: zodResolver(profileSchema),
})

export default function ProfileForm() {
    return (
        <div>
            <h1>Profile Form</h1>
        </div>
    );
}
