"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { CldUploadButton } from "next-cloudinary";
import ImageUpload from "../imageUpload/ImageUpload";


import InputModal from "../forms/InputModal";

interface CreatePostModalProps {
    onClose: () => void;
}


export default function CreatePostModal({onClose}: CreatePostModalProps) {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        formState: { errors },
      } = useForm<FieldValues>({
        defaultValues: {
          title: "",
          description: "",
          category: "",
          productType: "",
          image: "",
          location: "",
        },
      });

      const image = watch("image");

      const setCustomValue = (id: any, value: any) => {
        setValue(id, value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
      };

      const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const res = await fetch("/api/createPost", {
            method: "POST",
            body: JSON.stringify(data),
          });
    
          const result = await res.json();

          if (result.error) {
            toast.error("Une erreur est survenue");
          } else {
            toast.success("Annonce créée avec succès");
            router.refresh();
            onClose();
          }

      }

    return (
        <>
        <div className="fixed inset-0 z-[99] flex items-center justify-center">
        <div className="modal-overlay fixed inset-0 bg-gray-900 opacity-50"></div>
        <div className="modal-content mx-6 lg:mx-0 bg-primary-green rounded-lg p-2 w-[800px] transform transition-transform duration-300 ease-in-out translate-x-0">
            {/* Contenu de la fenêtre modale */}
            <div className="p-6 lg:px-14 py-10 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
                
                {/* form */}
                <form className="space-y-8 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col w-full">

                        
                            
                            <h3 className="section-title font-semibold text-[18px] lg:text-4xl text-white !mb-4">Poster une annonce</h3>

                            <div className="p-8 mb-4 lg:p-0">
                            
                                <label className="block mb-2 label-text">Photo du produit</label>
                                <ImageUpload
                                    onChange={(value) => setCustomValue("image", value)}
                                    value={image}
                                />
                            
                            </div>

                            <InputModal
                                id="title"
                                type="text"
                                label="Titre de l'annonce"
                                placeholder="Titre de l'annonce"
                                register={register("title", { required: true })}
                                error={errors.title && "Titre requis"}
                            />

                            <InputModal
                                id="description"
                                type="text"
                                label="Description de l'annonce"
                                placeholder="Description de l'annonce"
                                register={register("description", { required: true })}
                                error={errors.description && "Description requise"}
                            />

                            <InputModal
                                id="location"
                                type="text"
                                label="Localisation de l'annonce"
                                placeholder="exemple : Dijon, Côte d'Or"
                                register={register("location", { required: true })}
                                error={errors.description && "Description requise"}
                            />

                            <InputModal
                                id="category"
                                type="text"
                                label="Catégorie de produit"
                                placeholder="Catégorie"
                                register={register("category", { required: true })}
                                error={errors.productType && "Catégorie de produit requise"}
                            />

                            <InputModal
                                id="price"
                                type="number"
                                label="Prix de l'annonce"
                                placeholder="Prix de l'annonce"
                                register={register("price", { required: true })}
                                error={errors.price && "Prix requis"}
                            />


                            <div className="flex space-x-4 lg:space-x-2 justify-start mt-4">
                                <button type="submit" className="btn bg-white text-primary-green rounded-xl font-rubik font-medium btn-lg">
                                    Poster l'annonce
                                </button>
                            </div>

                        

                    </div>
                </form>

            </div>
        
            <div onClick={onClose} className="modal-close absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 cursor-pointer">
                <Image width={20} height={20} src={"/img/modals/close-modal.svg"} alt="close modal" />
            </div>
        </div>
   
  </div>
        </>
    )
      



}