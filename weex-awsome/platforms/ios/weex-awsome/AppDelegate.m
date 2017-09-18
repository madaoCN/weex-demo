//
//  AppDelegate.m
//  weex-awsome
//
//  Created by 梁宪松 on 2017/9/13.
//  Copyright © 2017年 Madao. All rights reserved.
//

#import "AppDelegate.h"
#import "UIWindow+Motion.h"
#import <WeexSDK/WeexSDK.h>
#import <AFNetworking/AFNetworking.h>
#import <SVProgressHUD/SVProgressHUD.h>
#import "WXImgLoaderDefaultImpl.h"
#import "WXEventModule.h"
#import <TBWXDevTool/WXDevTool.h>


@interface AppDelegate ()
{
    NSURL *_mainURL;
}

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    [self.window makeKeyAndVisible];
    
    [WXAppConfiguration setAppGroup:@"madao"];
    [WXAppConfiguration setAppName:@"weex"];
    [WXAppConfiguration setAppVersion:@"1.0.0"];
    
    [WXDevTool setDebug:NO];
    [WXDevTool launchDevToolDebugWithUrl:@"ws://10.5.6.7:8088/debugProxy/native"];
    
    [WXSDKEngine registerHandler:[WXEventModule new] withProtocol:@protocol(WXEventModuleProtocol)];
    [WXSDKEngine registerHandler:[WXImgLoaderDefaultImpl new] withProtocol:@protocol(WXImgLoaderProtocol)];
    [WXSDKEngine initSDKEnvironment];
    [WXLog setLogLevel:WXLogLevelLog];
    
    [self loadMainBundleJS];
    
    return YES;
}


- (void) loadMainBundleJS{
    if (self.window.rootViewController == nil) {
        self.window.rootViewController = [[WXRootViewController alloc] initWithSourceURL:nil];
    }
    
    _mainURL = [NSURL URLWithString:@"http://127.0.0.1:8080/dist/native/index.js"];
    [SVProgressHUD show];
    [[AFHTTPSessionManager manager] HEAD:_mainURL.absoluteString parameters:nil success:^(NSURLSessionDataTask * _Nonnull task) {
        [SVProgressHUD dismiss];
        self.window.rootViewController = [[WXRootViewController alloc] initWithSourceURL:_mainURL];
        
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        [SVProgressHUD dismiss];
        UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"您当前网络已经离线，请检查网络设置" message:nil preferredStyle:(UIAlertControllerStyleAlert)];
        [alert addAction:[UIAlertAction actionWithTitle:@"检查网络" style:(UIAlertActionStyleDefault) handler:^(UIAlertAction * _Nonnull action) {
            [self loadMainBundleJS];
        }]];
        [self.window.rootViewController presentViewController:alert animated:YES completion:nil];
    }];

}
- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
