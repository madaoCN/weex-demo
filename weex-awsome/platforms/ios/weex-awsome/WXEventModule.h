//
//  WXEventModule.h
//  weex-awsome
//
//  Created by 梁宪松 on 2017/9/14.
//  Copyright © 2017年 Madao. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <WeexSDK/WeexSDK.h>

@interface WXEventModule : NSObject<WXEventModuleProtocol>

- (void) openURL:(NSString *)url params:(NSDictionary *) params;


@end
