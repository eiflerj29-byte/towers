controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
    Projectiles(myDart)
})
function Projectiles (dart: Sprite) {
    myDart = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 . . . . . . . . . . . 
        . . . . 3 . . . . . 4 . . . . . 
        . . . . . 5 4 5 4 d 4 . . . . . 
        . . . . . d d 1 d 5 4 . . . . . 
        . . . . 4 5 5 1 5 1 d 4 . . . . 
        . . . . 4 5 1 5 5 5 5 4 . . . . 
        . . . . . 3 5 5 d 5 d 4 . . . . 
        . . . . 4 5 3 d d d 5 . . . . . 
        . . . . 4 d 4 d d 3 d . . . . . 
        . . . . 4 4 . 4 4 . 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile, 77, 60)
    myDart.setTrace()
    myDart.controlWithArrowKeys(true)
}
function towerSprite (Tower: Sprite) {
    mySprite2 = 77
    mySprite3 = 60
    Tower.setPosition(mySprite2, mySprite3)
}
let mySprite3 = 0
let mySprite2 = 0
let myDart: Dart = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . 
    . . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . 6 6 8 8 8 8 8 8 8 6 6 . . . 
    . . 6 8 8 . . . . . . . 8 8 6 . . 
    . . 6 8 . . . . . . . . . 8 6 . . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . 6 8 . . . . . . . . . . . 8 6 . 
    . . 6 8 . . . . . . . . . 8 6 . . 
    . . 6 8 8 . . . . . . . 8 8 6 . . 
    . . . 6 6 8 8 8 8 8 8 8 6 6 . . . 
    . . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Projectiles(myDart)
towerSprite(mySprite)
