declare namespace EFTut_Suppl.EFMod_TEDIntro {
    class CONST {
        static readonly TUTORCONTAINER: string;
        static readonly NAVNONE: number;
        static readonly NAVBACK: number;
        static readonly NAVNEXT: number;
        static readonly NAVBOTH: number;
        static readonly NEXTSCENE: string;
        static readonly PREVSCENE: string;
        static readonly HIDE: boolean;
        static readonly SHOW: boolean;
        static readonly NAVSCENE: string;
        static readonly NAVTUTOR: string;
        static readonly MOUSE_MOVE: string;
        static readonly MOUSE_DOWN: string;
        static readonly MOUSE_UP: string;
        static readonly MOUSE_CLICK: string;
        static readonly DOUBLE_CLICK: string;
        static readonly ALL: string;
        static readonly CLICK: string;
        static readonly CHANGED: string;
        static readonly FTRS_ALL: any;
        static readonly VAR_FTR: string;
        static readonly FTR_PRE: any;
        static readonly FTR_DEV: any;
        static readonly YELLOW: string;
        static readonly BLUE: string;
        static readonly GREEN: string;
        static readonly RED: string;
        static readonly NONE: string;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDIntro {
    class $Common {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $preEnterScene(): void;
        $onEnterScene(): void;
        $preExitScene(): void;
        $onExitScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(id: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $canGoBack(): boolean;
        $updateNav(): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDIntro {
    class Globals {
        $var1: string;
        [key: string]: any;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDIntro {
    class SNavigator {
        [key: string]: any;
        $preCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): any;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDIntro {
    class SScene1 {
        [key: string]: any;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): any;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDIntro {
    class SSceneEnd {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
declare namespace EFTut_Suppl.EFMod_TEDIntro {
    class SSceneStart {
        [key: string]: any;
        $preCreateScene(): void;
        $onCreateScene(): void;
        $onEnterScene(): void;
        $preEnterScene(): void;
        $preShowScene(): void;
        $preHideScene(): void;
        $onExitScene(): void;
        $demoInitScene(): void;
        $logScene(): void;
        $rewindScene(): void;
        $resolveTemplate(templID: string): void;
        $handleEvent(compID: string): void;
        $nodePreEnter(nodeId: string): void;
        $nodePreExit(nodeId: string): void;
        $nodeAction(actionId: string): void;
        $nodeConstraint(constrainId: string): boolean;
        $cuePoints(trackID: string, cueID: string): void;
        $timedEvents(id: string): void;
        $queryFinished(): boolean;
        $onAction(target: string): void;
        $onSelect(target: string): void;
        $onClick(target: string): void;
    }
}
