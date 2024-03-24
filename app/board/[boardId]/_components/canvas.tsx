"use client";

import { useSelf } from "@/liveblocks.config";
import { useCallback, useMemo, useState, useEffect } from "react";
import { 
    Camera, 
    CanvasMode, 
    CanvasState, 
    Color,
    LayerType,
    Point,
    Side,
    XYWH,
  } from "@/types/canvas";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
    boardId: string;
  };

export const Canvas = ({boardId, } : CanvasProps ) => {
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });
    const info = useSelf((me) => me.info);
    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">
            <Info boardId={boardId}/>
            <Participants />
            <Toolbar
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canRedo={false}
                canUndo={false}
                undo={()=>{}}
                redo={()=>{}}
            />
        </main>
    )
}