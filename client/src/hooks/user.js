import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { api } from "../lib/api";

export const addMenu = ()=>{
    const addMenuMutation = useMutation({
        mutationFn:async (data)=>{
            const respones = await api.post('/addMenu',data)
            return respones.data
        },
        onError: (error) => {
            toast.error("Menu not added")
            console.error("Error occurred while adding Menu:", error);
        },
        onSuccess: (data) => {
            toast.success("Menu added")
            console.log("Menu added successfully:", data);
        },
    })
    return addMenuMutation
}

