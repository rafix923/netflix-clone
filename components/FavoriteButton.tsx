import axios from "axios";
import { FavoriteButtonProps } from "@/models/FavoriteButtonProps";
import React, { useCallback, useMemo } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  return (
    <div
      className="
  cursor-pointer
  group/item
  w-6
  h-6
  lg:w-10lg:h-10
  border-white
  border-2
  rounded-full
  flex
  justify-center
  transition
  hover:border-neutral-300  
  "
    >
      <AiOutlinePlus className="text-white" size={25} />
    </div>
  );
};

export default FavoriteButton;
