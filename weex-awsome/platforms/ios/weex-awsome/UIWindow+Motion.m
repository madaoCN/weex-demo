//
//  UIWindow+Motion.m
//  weex-awsome
//
//  Created by 梁宪松 on 2017/9/13.
//  Copyright © 2017年 Madao. All rights reserved.
//

#import "UIWindow+Motion.h"
#import <WeexSDK/WeexSDK.h>
#import "AppDelegate.h"

@implementation UIWindow (Motion)

- (void)motionEnded:(UIEventSubtype)motion withEvent:(UIEvent *)event {
    NSLog(@"motionEnded");
    AppDelegate *delegate =  (AppDelegate * )[UIApplication sharedApplication].delegate;
    WXRootViewController *rootViewController = (WXRootViewController *) delegate.window.rootViewController;
    WXBaseViewController *controller = (WXBaseViewController *) rootViewController.viewControllers.lastObject;
    if ([controller isKindOfClass:[WXBaseViewController class]]) {
        [controller refreshWeex];
    }
}

@end
