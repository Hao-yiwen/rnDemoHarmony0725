# 问题汇总

## 运行

- yarn

- harmony

  - npx react-native start
  - 自行打开集成了 ohRN 的的 App，并跳转到对应页面

- android
  - npx react-native run-android

## harmony 新架构问题

| 序号 | 问题                                                                                                        | harmony                                   | android                                  |
| ---- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------- |
| 1    | Animated.Scrollview 中使用 measureLayout 会失效                                                             | 使用 ref 没问题                           | 仍然存在                                 |
| 3    | 在新架构中如果要进行 measure，则使用 ref.measure，但是目前通过 sectionLoist 获取的 ref 无法进行 ref.measure | [code](./src/SectionListRefInvlid.tsx)    | 仍然存在                                 |
| 10   | Animated.FlatList 滑动不流畅，很卡顿                                                                        | [code](./src/FlatListStuckAndStopped.tsx) | 在相同的 flatlist 复杂度情况下，未能复现 |
| 11   | 在 ScrollView 滑动后，点击勾选组件，ScrollVIew 会闪动                                                       |                                           |                                          |
| 12   | ScrollView 里面用了一个横向的 FlatList，在 FlatList 滚动的时候 setState，ScrollView 会被滚动                |                                           |                                          |
| 13   | ~~多个 Modal 覆盖会卡死~~                                                                                   | 没问题                                    |                                          |
| 22   | ~~IOS TouchableOpacity 内嵌 Aminated.View ，Aminated.View 开启动画变更位置后，无法点击~~                    | 没问题                                    |                                          |
| 23   | 样式中使用了 zIndex 属性层级可能不生效,尝试添加 position:relative 属性后生效                                | 待验证                                    |                                          |
| 24   | 组件需要设置默认高宽，不然布局展示可能发生截断                                                              | 待验证                                    |                                          |
| 33   | 如果一个屏幕中有两个 scrolliview，那么有动画的 scrollivew 动画失效                                          | 待验证                                    |                                          |

## 非新架构问题，harmony 特有问题

- 当弹窗过多时 flatlist 中 modal 打不开

```
src/pages/ModalTabView.tsx
```

- andimated 颜色插值过度闪烁严重

```
src/pages/FlatListStuckAndStopped.tsx
```

- 真机发热严重
