require('colors')

const message = (port) => {
  console.clear()
  console.log(`
${'======================================='.blue}
        ${'TuneMatch on port: ' + port}
${'======================================= \n'.blue}
________________________________________
_______________________11_______________
____________________1__¶¶_______________
___________________1_1¶¶¶1______________
__________________11_¶¶¶¶_______________
_________________11_¶¶¶¶1_______________
________________1__¶¶1_1________________
_______________1_1¶¶¶__1________________
_______________1_1¶¶¶___________________
_____________11_¶¶1¶¶¶¶_________________
______________1¶¶¶¶1¶¶1_________________
_______________1¶¶111¶__________________
_________________111¶¶__________________
_________________1¶¶¶¶__________________
_________________11111__________________
_________________11__1__________________
_________________11__1__________________
_________________11111__________________
_________________11111__________________
_________________111_1__________________
_________________11__1__________________
_________________11111__________________
_________________11111__________________
_________________11111__________________
_________________11__11_________________
_________________11__11_________________
_________________111111_________________
_________________111111_________________
_________________11__11_________________
_________________111111_________________
_________________111111_________________
_________________11__11_________________
_________________11__11_________________
_________________111111_________________
_________________111111_________________
_________________111111_________________
_________________1_11_1_________________
_________________111111_________________
_______1_________111111_________________
_____1¶¶_________111111_________________
____1¶¶¶_________111111_________________
____¶¶¶¶_________111111_________________
____¶¶¶¶1________111111_________________
____¶¶¶¶¶________111111___________1_____
____1¶¶¶¶¶1____11111111__________¶¶¶____
_____¶¶¶¶¶¶¶¶¶¶¶1111111__________¶¶¶1___
_____1¶¶¶¶¶¶¶¶¶¶1111111_________1¶¶¶1___
______¶¶¶¶¶¶¶¶¶¶11111111_______11¶¶¶____
______1¶¶¶¶¶¶¶¶¶1_111111¶___111_1¶¶¶____
_______¶¶¶¶¶¶¶¶¶11111111¶¶¶1¶¶1_¶¶¶_____
________¶¶¶¶¶¶¶¶11111111¶¶¶11¶¶¶¶¶1_____
________¶¶¶¶¶¶¶¶111111111¶¶¶¶¶¶¶¶¶______
________¶¶¶¶¶¶¶¶¶1¶¶¶111¶¶¶¶¶1¶¶¶_______
________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_______
_______1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1______
_______¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1¶¶¶¶¶______
______¶¶¶¶¶¶¶¶¶¶11111111¶¶¶1¶¶¶¶¶¶¶_____
_____¶¶¶¶¶¶¶¶¶¶¶11111111¶¶¶1¶1¶¶¶¶¶¶____
____¶¶¶¶¶¶¶¶¶¶¶¶1111¶111¶¶1¶¶¶¶¶¶¶¶¶¶___
___1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶¶¶¶1__
___¶¶¶¶¶¶¶¶¶¶¶1¶¶1111111¶1¶¶¶¶¶11¶¶¶¶¶__
__¶¶¶¶¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1_
__¶¶¶¶¶¶¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1_¶¶¶¶_
_1¶¶¶¶¶¶¶¶¶¶¶¶¶¶1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_
_1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_
__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_
__1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_
___1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶__
_____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1___
_______1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶1______
\n`.yellow)
}

module.exports = message