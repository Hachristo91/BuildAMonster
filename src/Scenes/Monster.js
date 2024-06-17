class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.leftLegX = this.bodyX - 60;
        this.leftLegY = this.bodyY + 150;

        this.rightLegX = this.bodyX + 60;
        this.rightLegY = this.bodyY + 150;

        this.leftArmX = this.bodyX - 100;
        this.leftArmY = this.bodyY + 50;

        this.rightArmX = this.bodyX + 100;
        this.rightArmY = this.bodyY + 50;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 30;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 30;

        this.fangsX = this.smileX;
        this.fangsY = this.smileY;

        this.leftHornX = this.bodyX - 50;
        this.leftHornY = this.bodyY - 80;

        this.rightHornX = this.bodyX + 50;
        this.rightHornY = this.bodyY - 80;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_redC.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_redC.png");

        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_redA.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_redA.png");

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_yellow.png");

        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.smile.visible = false;

        my.sprite.fangs = this.add.sprite(this.fangsX, this.fangsY, "monsterParts", "mouthF.png");
        my.sprite.fangs.visible = false;

        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_dark_horn_large.png");

        this.input.keyboard.on('keydown-S', () => {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        }, this);

        this.input.keyboard.on('keydown-F', () => {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        }, this);
   
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        let a = this.input.keyboard.addKey(65);
        let d = this.input.keyboard.addKey(68);
        if(a.isDown){
            my.sprite.body.x -= 1;
            my.sprite.leftLeg.x -= 1;
            my.sprite.rightLeg.x -= 1;
            my.sprite.leftArm.x -= 1;
            my.sprite.rightArm.x -= 1;
            my.sprite.eye.x -= 1;
            my.sprite.smile.x -= 1;
            my.sprite.fangs.x -= 1;
            my.sprite.leftHorn.x -= 1;
            my.sprite.rightHorn.x -= 1;
        }
        if(d.isDown){
            my.sprite.body.x += 1;
            my.sprite.leftLeg.x += 1;
            my.sprite.rightLeg.x += 1;
            my.sprite.leftArm.x += 1;
            my.sprite.rightArm.x += 1;
            my.sprite.eye.x += 1;
            my.sprite.smile.x += 1;
            my.sprite.fangs.x += 1;
            my.sprite.leftHorn.x += 1;
            my.sprite.rightHorn.x += 1;
        }

       
    }

}