//
//  WXImgLoaderDefaultImpl.m
//  weex-awsome
//
//  Created by 梁宪松 on 2017/9/14.
//  Copyright © 2017年 Madao. All rights reserved.
//

#import "WXImgLoaderDefaultImpl.h"
#import <SDWebImage/SDWebImageManager.h>

@interface WXCassetsLoaderOperation : NSObject<WXImageOperationProtocol>
@end
@implementation WXCassetsLoaderOperation

- (void)cancel{}

@end

#define MIN_IMAGE_WIDTH 36
#define MIN_IMAGE_HEIGHT 36

#if OS_OBJECT_USE_OBJC
#undef  WXDispatchQueueRelease
#undef  WXDispatchQueueSetterSementics
#define WXDispatchQueueRelease(q)
#define WXDispatchQueueSetterSementics strong
#else
#undef  WXDispatchQueueRelease
#undef  WXDispatchQueueSetterSementics
#define WXDispatchQueueRelease(q) (dispatch_release(q))
#define WXDispatchQueueSetterSementics assign
#endif


@interface WXImgLoaderDefaultImpl()

@property (WXDispatchQueueSetterSementics, nonatomic) dispatch_queue_t ioQueue;

@end
@implementation WXImgLoaderDefaultImpl


- (id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)userInfo completed:(void(^)(UIImage *image,  NSError *error, BOOL finished))completedBlock {

    if ([url hasPrefix:@"//"]) {
        url = [@"http:" stringByAppendingString:url];
    }else if ([url hasPrefix:@"xcassets:"])//加载本地图片
    {
        UIImage *image = [UIImage imageNamed:[url substringFromIndex:9]];
        completedBlock(image, nil, YES);
        return [WXCassetsLoaderOperation new];
    }
    return (id<WXImageOperationProtocol>) [[SDWebImageManager sharedManager] downloadImageWithURL:[NSURL URLWithString:url] options:0 progress:^(NSInteger receivedSize, NSInteger expectedSize) {
        //
    } completed:^(UIImage *image, NSError *error, SDImageCacheType cacheType, BOOL finished, NSURL *imageURL) {
        if (completedBlock) {
            completedBlock(image, error, finished);
        }
    }];
}

@end
