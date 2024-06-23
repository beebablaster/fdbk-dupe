import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";
import {RateStars} from "./RateStars";
import {SendIcon} from "lucide-react";
import {Button} from "../ui/button";
import {Input, Textarea} from "../ui/input";
import {Label} from "../ui/label";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "../ui/dialog";
import {Status} from "@/models/Status";
import {ShellLayout} from "@/components/Layout/ShellLayout";
import {userAPI} from "@/services/users";
import {cn} from "@/utils/cn";
import { Award } from "./Award";

export const mockRewards = [
    {
        imgSrc: 'no1-choice.png',
        description: 'Глубокие знания'
    },
    {
        imgSrc: 'rocket.png',
        description: 'Мотивационная речь'
    },
    {
        imgSrc: 'medal.png',
        description: 'Хорошая презентация'
    }
]

export const RatingPage = () => {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [state, setState] = React.useState<Status>("idle");
    const [rating, setRating] = React.useState(0);
    const [comment, setComment] = React.useState('');

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const handleCommentChange = (comment: string) => {
        setComment(comment)
    }

    const handleClick = () => {
        setState("pending");
        setTimeout(() => {
            setState("success");
            setDialogOpen(true);
        }, 900);
        createReview({
            comment: comment,
            rating: rating
        });
    }

    const createReview = async (review: any) => {
        const create = await userAPI.createUserReviewDemo(review);
        console.log(create)
    }

    return (

            <div className="w-full px-2">
                <div
                    className="w-full h-28 relative mt-2 mb-4 rounded-md overflow-hidden overlay flex items-center justify-center">
                    <Image src="/organizations/img12.jpg" className="object-cover" alt="Cover image" fill></Image>
                    <span className="text-white text-2xl font-bold">Оцените мероприятие</span>
                </div>
                <div className="text-4xl">Alma Valley - 21.02.2024</div>
                <div className="text-2xl text-muted">Презентация</div>
                {/*<div className="flex mt-4 items-center gap-4">*/}
                {/*  <div className="relative">*/}
                {/*    <Avatar className="w-16 h-16 aspect-square">*/}
                {/*      <AvatarImage src="/agai.jpeg" />*/}
                {/*      <AvatarFallback className="text-4xl">MA</AvatarFallback>*/}
                {/*    </Avatar>*/}
                {/*    <Image src="/badge.png" className="absolute -bottom-1 -right-1" width={24} height={24} alt="badge" />*/}
                {/*  </div>*/}
                {/*  <div>*/}
                {/*    <div className="text-2xl">Азамат Муратов</div>*/}
                {/*    <div className="text-muted text-lg">CEO & Founder of Alma Valley</div>*/}
                {/*  </div>*/}
                {/*</div>*/}
                <div className="py-4"></div>
                <div
                    className="flex items-center justify-center flex-col text-2xl text-center p-2 bg-accent rounded-md">
                    Дайте вашу оценку презентации
                    <div className="py-2"/>
                    <RateStars onRatingChange={handleRatingChange}/>
                </div>
                <div className="py-4"></div>
                <div className="certificates-list flex gap-6  overflow-x-auto">
                    {mockRewards.map((reward, index) => (
                        <Award key={index} imgSrc={reward.imgSrc} description={reward.description} />
                    ))}
                </div>
                <div className="py-4"></div>
                <div className="flex flex-col justify-center gap-4 mt-6">
                    <div className="relative">
                        <Label htmlFor="comment" className="text-lg">Оставьте отзыв</Label>

                        <div className="relative">
                        <textarea
                            className={cn(
                                "flex h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                            )}
                            style={{
                                minHeight: "4rem"
                            }}
                            placeholder="Комментарий"
                            onChange={(event) => {
                                handleCommentChange(event.target.value)
                            }}
                        />
                        </div>
                    </div>
                    <Button state={state} className="text-xl" onClick={handleClick}>
                        <SendIcon size={18}/>
                        Оценить
                    </Button>
                </div>
                <div className="py-4"/>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogContent className="py-4">
                        <div className="relative">
                            <div className="text-lg text-center mt-6">Спасибо, ваша оценка учтена</div>
                            <div className="flex justify-between w-2/4 mx-auto mb-64 mt-4">
                                <a className="https://www.instagram.com/almavalley.kz/" target="_blank"
                                   rel="noopener noreferrer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22.7981 3.50166C24.0751 3.49676 25.3521 3.5096 26.6288 3.54017L26.9683 3.55241C27.3603 3.56641 27.7471 3.58391 28.2143 3.60491C30.0763 3.69241 31.3468 3.98642 32.4616 4.41867C33.6166 4.86317 34.5896 5.46516 35.5626 6.43816C36.4522 7.31248 37.1408 8.37007 37.5803 9.53741C38.0126 10.6522 38.3066 11.9244 38.3941 13.7864C38.4151 14.2519 38.4326 14.6404 38.4466 15.0324L38.4571 15.3719C38.4882 16.648 38.5016 17.9245 38.4973 19.2009L38.4991 20.5064V22.7989C38.5034 24.076 38.49 25.353 38.4588 26.6297L38.4483 26.9692C38.4343 27.3612 38.4168 27.7479 38.3958 28.2152C38.3083 30.0772 38.0108 31.3477 37.5803 32.4624C37.1422 33.631 36.4535 34.6895 35.5626 35.5634C34.6875 36.453 33.6293 37.1415 32.4616 37.5812C31.3468 38.0134 30.0763 38.3074 28.2143 38.3949C27.7471 38.4159 27.3603 38.4334 26.9683 38.4474L26.6288 38.4579C25.3521 38.489 24.0751 38.5024 22.7981 38.4982L21.4926 38.4999H19.2018C17.9248 38.5042 16.6477 38.4908 15.3711 38.4597L15.0316 38.4492C14.6161 38.4341 14.2008 38.4166 13.7856 38.3967C11.9236 38.3092 10.6531 38.0117 9.53656 37.5812C8.36875 37.1425 7.31097 36.4539 6.43731 35.5634C5.54664 34.6889 4.85745 33.6306 4.41781 32.4624C3.98556 31.3477 3.69156 30.0772 3.60406 28.2152C3.58457 27.7999 3.56707 27.3846 3.55156 26.9692L3.54281 26.6297C3.51054 25.353 3.49596 24.076 3.49906 22.7989V19.2009C3.49417 17.9245 3.50701 16.648 3.53756 15.3719L3.54981 15.0324C3.56381 14.6404 3.58131 14.2519 3.60231 13.7864C3.68981 11.9227 3.98381 10.6539 4.41606 9.53741C4.85596 8.3695 5.54649 7.31219 6.43906 6.43991C7.31212 5.54873 8.36924 4.85892 9.53656 4.41867C10.6531 3.98642 11.9218 3.69241 13.7856 3.60491L15.0316 3.55241L15.3711 3.54367C16.6471 3.51142 17.9236 3.49683 19.2001 3.49992L22.7981 3.50166ZM20.9991 12.2517C19.8397 12.2353 18.6886 12.4495 17.6128 12.8818C16.5369 13.3141 15.5577 13.956 14.732 14.77C13.9064 15.5841 13.2508 16.5541 12.8033 17.6237C12.3558 18.6934 12.1253 19.8413 12.1253 21.0008C12.1253 22.1603 12.3558 23.3082 12.8033 24.3778C13.2508 25.4475 13.9064 26.4175 14.732 27.2316C15.5577 28.0456 16.5369 28.6875 17.6128 29.1198C18.6886 29.5521 19.8397 29.7663 20.9991 29.7499C23.3197 29.7499 25.5453 28.828 27.1862 27.1871C28.8272 25.5462 29.7491 23.3206 29.7491 20.9999C29.7491 18.6793 28.8272 16.4537 27.1862 14.8127C25.5453 13.1718 23.3197 12.2517 20.9991 12.2517ZM20.9991 15.7517C21.6964 15.7388 22.3894 15.8651 23.0374 16.123C23.6855 16.381 24.2756 16.7655 24.7734 17.2541C25.2712 17.7427 25.6666 18.3256 25.9366 18.9688C26.2066 19.6119 26.3457 20.3024 26.3458 20.9999C26.3459 21.6974 26.207 22.3879 25.9373 23.0312C25.6675 23.6744 25.2723 24.2574 24.7747 24.7462C24.2771 25.235 23.687 25.6197 23.0391 25.8779C22.3911 26.1361 21.6982 26.2625 21.0008 26.2499C19.6084 26.2499 18.2731 25.6968 17.2885 24.7122C16.3039 23.7277 15.7508 22.3923 15.7508 20.9999C15.7508 19.6075 16.3039 18.2722 17.2885 17.2876C18.2731 16.303 19.6084 15.7499 21.0008 15.7499L20.9991 15.7517ZM30.1866 9.62666C29.622 9.64926 29.0881 9.88943 28.6966 10.2969C28.3052 10.7043 28.0865 11.2474 28.0865 11.8124C28.0865 12.3774 28.3052 12.9205 28.6966 13.328C29.0881 13.7354 29.622 13.9756 30.1866 13.9982C30.7667 13.9982 31.3231 13.7677 31.7334 13.3575C32.1436 12.9472 32.3741 12.3908 32.3741 11.8107C32.3741 11.2305 32.1436 10.6741 31.7334 10.2639C31.3231 9.85363 30.7667 9.62317 30.1866 9.62317V9.62666Z"
                                            fill="#757575"/>
                                    </svg>
                                </a>
                                <a href="https://t.me/batyrsultaan" target="_blank" rel="noopener noreferrer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21 3.5C11.34 3.5 3.5 11.34 3.5 21C3.5 30.66 11.34 38.5 21 38.5C30.66 38.5 38.5 30.66 38.5 21C38.5 11.34 30.66 3.5 21 3.5ZM29.12 15.4C28.8575 18.165 27.72 24.885 27.1425 27.9825C26.8975 29.295 26.4075 29.7325 25.9525 29.785C24.9375 29.8725 24.1675 29.12 23.1875 28.4725C21.6475 27.4575 20.7725 26.8275 19.285 25.8475C17.5525 24.71 18.6725 24.08 19.67 23.065C19.9325 22.8025 24.4125 18.725 24.5 18.3575C24.5122 18.3018 24.5105 18.2441 24.4953 18.1892C24.48 18.1343 24.4516 18.0839 24.4125 18.0425C24.3075 17.955 24.1675 17.99 24.045 18.0075C23.8875 18.0425 21.4375 19.67 16.66 22.89C15.96 23.3625 15.33 23.6075 14.77 23.59C14.14 23.5725 12.95 23.24 12.0575 22.9425C10.955 22.5925 10.0975 22.4 10.1675 21.7875C10.2025 21.4725 10.64 21.1575 11.4625 20.825C16.5725 18.6025 19.9675 17.1325 21.665 16.4325C26.53 14.4025 27.5275 14.0525 28.1925 14.0525C28.3325 14.0525 28.665 14.0875 28.875 14.2625C29.05 14.4025 29.1025 14.595 29.12 14.735C29.1025 14.84 29.1375 15.155 29.12 15.4Z"
                                            fill="#757575"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/almavalley/mycompany/" target="_blank"
                                   rel="noopener noreferrer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M33.25 5.25C34.1783 5.25 35.0685 5.61875 35.7249 6.27513C36.3813 6.9315 36.75 7.82174 36.75 8.75V33.25C36.75 34.1783 36.3813 35.0685 35.7249 35.7249C35.0685 36.3813 34.1783 36.75 33.25 36.75H8.75C7.82174 36.75 6.9315 36.3813 6.27513 35.7249C5.61875 35.0685 5.25 34.1783 5.25 33.25V8.75C5.25 7.82174 5.61875 6.9315 6.27513 6.27513C6.9315 5.61875 7.82174 5.25 8.75 5.25H33.25ZM32.375 32.375V23.1C32.375 21.5869 31.7739 20.1359 30.704 19.066C29.6341 17.9961 28.1831 17.395 26.67 17.395C25.1825 17.395 23.45 18.305 22.61 19.67V17.7275H17.7275V32.375H22.61V23.7475C22.61 22.4 23.695 21.2975 25.0425 21.2975C25.6923 21.2975 26.3154 21.5556 26.7749 22.0151C27.2344 22.4746 27.4925 23.0977 27.4925 23.7475V32.375H32.375ZM12.04 14.98C12.8197 14.98 13.5675 14.6703 14.1189 14.1189C14.6703 13.5675 14.98 12.8197 14.98 12.04C14.98 10.4125 13.6675 9.0825 12.04 9.0825C11.2556 9.0825 10.5034 9.39409 9.94873 9.94873C9.39409 10.5034 9.0825 11.2556 9.0825 12.04C9.0825 13.6675 10.4125 14.98 12.04 14.98ZM14.4725 32.375V17.7275H9.625V32.375H14.4725Z"
                                            fill="#757575"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full aspect-[2]">
                                <div className="relative w-full h-full">
                                    <Image src="/confetti.png" fill alt="confetti" className="object-cover"/>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
    )
}