let explosions = [
    `     _.-^^---....,,--
    _--                  --_
   <                        >)
   |                         |
    \._                   _./
       \`\`\`--. . , ; .--'''
             | |   |
          .-=||  | |=-.
          \`-=#$%&%$#=-'
             | ;  :|
    _____.,-#%&$@%#&#~,._____`,
    `.................NUKEDNUKEDNUKEDNUKED.............
    ..........NUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKED.....
    .....NUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKED
    .....NUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKED
    .....NUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKED
    .....NUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKED
    .....NUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKED
    ......NUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKED....
    ..........NUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKED.....
    ......................NUKEDNUKED..................
    ......................NUKEDNUKED..................
    ......................NUKEDNUKED..................
    ......................NUKEDNUKED..................
    ......................NUKEDNUKED..................
    ......................NUKEDNUKED..................
    ......................NUKEDNUKED..................
    ......................NUKEDNUKED..................
    .................NUKEDNUKEDNUKEDNUKED.............
    .........NUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKED......
    .......NUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKED...
    NUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKEDNUKED
    *******************GROUND ZERO********************`,
    `
                                  ..-^~~~^-..
                                .~           ~.
                               (;:           :;)
                                (:           :)
                                  ':._   _.:'
                                      | |
                                    (=====)
                                      | |
-O-                                   | |
  \                                   | |
  /\                               ((/   \))`,
  `                             ____
                     __,-~~/~    \`---.
                   _/_,---(      ,    )
               __ /        <    /   )  \___
- ------===;;;'====------------------===;;;===----- -  -
                  \/  ~"~"~"~"~"~\~"~)~"/
                  (_ (   \  (     >    \)
                   \_( _ <         >_>'
                      ~ \`-i' ::>|--"
                          I;|.|.|
                         <|i::|i|\`.
                        (\` ^'"\`-' ")
---------------------------------------------------------`,
`                               ________________
                          ____/ (  (    )   )  \___
                         /( (  (  )   _    ))  )   )\
                       ((     (   )(    )  )   (   )  )
                     ((/  ( _(   )   (   _) ) (  () )  )
                    ( (  ( (_)   ((    (   )  .((_ ) .  )_
                   ( (  )    (      (  )    )   ) . ) (   )
                  (  (   (  (   ) (  _  ( _) ).  ) . ) ) ( )
                  ( (  (   ) (  )   (  ))     ) _)(   )  )  )
                 ( (  ( \ ) (    (_  ( ) ( )  )   ) )  )) ( )
                  (  (   (  (   (_ ( ) ( _    )  ) (  )  )   )
                 ( (  ( (  (  )     (_  )  ) )  _)   ) _( ( )
                  ((  (   )(    (     _    )   _) _(_ (  (_ )
                   (_((__(_(__(( ( ( |  ) ) ) )_))__))_)___)
                   ((__)        \\||lll|l||///          \_))
                            (   /(/ (  )  ) )\   )
                          (    ( ( ( | | ) ) )\   )
                           (   /(| / ( )) ) ) )) )
                         (     ( ((((_(|)_)))))     )
                          (      ||\(|(|)|/||     )
                        (        |(||(||)||||        )
                          (     //|/l|||)|\\ \     )
                        (/ / //  /|//||||\\  \ \  \ _)
-------------------------------------------------------------------------------`
];

class Nuke {
    constructor(type, options)
    {
        if (type)
        this.type = type;
        else
        this.type = "Atom bomb";

        if (options.interval)
            setInterval(() => console.log(`Your ${this.type} has exploded!\n${explosions[Math.floor(Math.random() * explosions.length)]}`), options.interval);
    
        if (options.timeout)
        setTimeout(() => console.log(`Your ${this.type} has exploded!\n${explosions[Math.floor(Math.random() * explosions.length)]}`), options.timeout)
    }


}

module.exports = Nuke;