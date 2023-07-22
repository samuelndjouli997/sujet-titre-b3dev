import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Post } from "@prisma/client";

interface DeletePostModalProps {
    onClose: () => void;
    post: Post | null;
}

// Le composant de la modal pour supprimer le post
export default function DeletePostModal({ onClose, post }: DeletePostModalProps) {
  const router = useRouter();

  // Fonction pour gérer la suppression du post
  const handleDelete = async () => {
    try {
      const res = await fetch("/api/deletePost", {
        method: "DELETE",
        body: JSON.stringify({ postId: post?.id }), 
      });
      const result = await res.json();

      if (result.error) {
        // toast.error("Une erreur est survenue lors de la suppression du post.");
        console.log(result.error);
      } else {
        toast.success("Post supprimé avec succès");
        router.refresh(); // Rafraîchit la page après la suppression du post
        onClose(); // Ferme la modal
      }
    } catch (error) {
      toast.error("Une erreur est survenue lors de la suppression du post.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-[99] flex items-center justify-center">
        <div className="modal-overlay fixed inset-0 bg-gray-900 opacity-50"></div>
        <div className="modal-content mx-6 lg:mx-0 bg-primary-green rounded-lg p-2 w-[800px] transform transition-transform duration-300 ease-in-out translate-x-0">
          {/* Contenu de la fenêtre modale */}
          <div
            className="p-6 lg:px-14 py-10 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 80px)" }}
          >
            <div className="flex flex-col w-full">
              <h3 className="section-title font-semibold text-[18px] lg:text-4xl text-white !mb-4">
                Supprimer le post
              </h3>
              <p className="text-white mb-4">
                Êtes-vous sûr de vouloir supprimer cette annonce ? Cette action est
                irréversible.
              </p>
              <div className="flex space-x-4 lg:space-x-2 justify-center items-center mt-4">
                <button
                  onClick={handleDelete} // Appelle la fonction de suppression lorsque le bouton est cliqué
                  className="btn bg-red-500 text-white rounded-xl font-rubik font-medium btn-lg transition-colors duration-300 hover:bg-red-700 hover:text-white"
                >
                  Supprimer l'annonce
                </button>

                <button
                  onClick={onClose} // Ferme simplement la modal si l'utilisateur annule
                  className="btn bg-primary-green text-white rounded-xl font-rubik font-medium btn-lg"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
          <div
            onClick={onClose}
            className="modal-close absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <Image width={20} height={20} src={"/img/modals/close-modal.svg"} alt="close modal" />
          </div>
        </div>
      </div>
    </>
  );
}
