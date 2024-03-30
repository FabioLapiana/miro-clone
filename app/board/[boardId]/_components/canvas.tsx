"use client";

import { 
    useHistory, 
    useCanUndo, 
    useCanRedo,
    useMutation,
    useStorage,
    useOthersMapped,
    useSelf,
  } from "@/liveblocks.config";
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
import { CursorsPresence } from "./cursors-presence";

interface CanvasProps {
    boardId: string;
  };

export const Canvas = ({boardId, } : CanvasProps ) => {
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });
    const info = useSelf((me) => me.info);

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">
            <Info boardId={boardId}/>
            <Participants />
            <Toolbar
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canRedo={canRedo}
                canUndo={canUndo}
                undo={history.undo}
                redo={history.redo}
            />
            <svg
                className="h-[100vh] w-[100vw]"
            >
                <g
                ><CursorsPresence />
                </g>
            </svg>
        </main>
    )
}