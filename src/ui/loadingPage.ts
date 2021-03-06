class LoadingPage extends egret.DisplayObjectContainer{
    
    private totalProgress:ProcessBar;
    private _count:number;
    private _total:number;

    constructor(total: number){
        
        super();

        this._count = 0;
        this._total = total;
        let bgImage = "ui/bg.jpg";
        this.once(egret.Event.ADDED_TO_STAGE,() => {
            this.onAdd(bgImage)
        },this);
    }

    // 初始化加载时的背景及进度条
    private onAdd(bgImage:string){
        var wid = this.stage.stageWidth;
        var hei = this.stage.stageHeight;

        if (bgImage){
            var bg = new egret.Bitmap();
            bg.texture = RES.getRes(bgImage);
            this.addChild(bg);
        }

        this.totalProgress = new ProcessBar(
            "ui/gameUI.json#hpbar_bg.png","ui/gameUI.json#expbar.png");
        this.totalProgress.width = wid - 100;
        this.totalProgress.height = 10;
        this.totalProgress.ratio = 0;
        this.totalProgress.x = 50;
        this.totalProgress.y = (hei - this.totalProgress.height) * 0.5 - 10;
        this.addChild(this.totalProgress);
    }

    public update() {
        this._count ++;
        this.totalProgress.ratio = this._count / this._total;
    }

}