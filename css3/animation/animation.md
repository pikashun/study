# animation
    animetion-duration,animation-delay,animation-timing-function和transition类似；

    animation-timing-function 是在每次运动过程中生效，

                                可设置cubic-besier（0，0，1，1）曲线，控制动画的速度

                                还可设置step（number,start||end），以跳转的形式发生变化，执行时间不变
                                第一个数字指跳转次数，第二个值start：跳转空袭时间展现当前帧的状态
                                                           end：跳转空隙时间展现后一帧的状态



    animation-iterationn-count ： 动画执行次数，delay只有在第一次运动前生效。可设置为infinite；无限次运动

    animation-direction ： 设置走keyframe的执行方向 alternate为正一次反一次。可用此实现钟摆运动，
                           alternate-reverse为先反一次再正一次

    animation-play-state ： 设置运动状态，paused为暂停，
                            但兼容性不好，暂停后继续运动，不同浏览器实现方式不同，有的继续运动，有的返回最开始运动

    animation-fill-mode ： 设置运动结束后的元素状态
                           none : 默认值
                           forwards ： 设置结束后状态为运动结束时那一帧的样式 即100%
                           backwards ： 设置开始前为运动开始时那一帧的样式 即0%，若存在delay属性，则以0%时的状态等待
                           both ： 为forwards和backwards的结合  