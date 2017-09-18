//
//  WXEventModule.m
//  weex-awsome
//
//  Created by 梁宪松 on 2017/9/14.
//  Copyright © 2017年 Madao. All rights reserved.
//

#import "WXEventModule.h"
#import <MWPhotoBrowser/MWPhotoBrowser.h>

@implementation WXEventModule
@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(openURL:))
WX_EXPORT_METHOD(@selector(openURL:params:))
- (void)openURL:(NSString *)url {
    [self openURL:url params:nil];
}

- (void) openURL:(NSString *)url params:(NSDictionary *) params {
    NSString *newURL = url;
    if ([url hasPrefix:@"//"]) {
        newURL = [NSString stringWithFormat:@"http:%@", url];
    }
    if ([url hasPrefix:@"http"]) {
        WXBaseViewController *controller = [[WXBaseViewController alloc] initWithSourceURL:[NSURL URLWithString:newURL]];
        [[weexInstance.viewController navigationController] pushViewController:controller animated:YES];
    } else {
        [[UIApplication sharedApplication] openURL:[NSURL URLWithString:url]];
    }
}


@end
