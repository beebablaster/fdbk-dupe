import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import {Separator} from '@/components/ui/separator';
import {IBreadcrumb} from '@/components/common/Breadcrumb';
import {ShellLayout} from '@/components/Layout/ShellLayout';
import {Routes} from '@/components/constants/routes';
import {Skeleton} from '@/components/ui/skeleton';
import {ImageLoader} from '@/components/common/ImageLoader';
import {RateStar} from '@/components/Rating/RateStar';
import {TOrganization} from '@/models/Organization';
import {Button} from '@/components/ui/button';
import { QrCode as QRModule } from '../common/qr/QrCode';
import {
    BookOpen,
    Download,
    Info,
    Instagram,
    Landmark,
    Linkedin,
    Mail,
    Pencil,
    Printer,
    QrCode,
    RefreshCwIcon,
    Share
} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage, CircleAvatar} from '@/components/ui/avatar';
import {Rating} from '@/components/common/Rating';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import useUserStore from "@/store/useUserStore";
import {userAPI} from "@/services/users";
import {FeedbackDemo} from "@/models/User";

export const organization: TOrganization = {
    name: 'КБТУ',
    shortName: 'КБТУ',
    photo: 'img2.jpg',
    id: '',
    rating: {
        Count: 0,
        Rating: 0,
        Sum: 0
    },
    category: {
        ID: undefined,
        name: 'Университет',
        field: 'Университет'
    },
    category_id: 0,
    level: 0
};

export const mockReviews: FeedbackDemo[] = [
    {
        id: 980,
        studentName: "Аноним",
        createdAt: '04.04.2024 19:53' as unknown as Date,
        rating: 4,
        comment: "Что особенно впечатлило меня в стиле преподавания, так это его умелость говорить сложно о простых вещах. Его способность сделать материал интересным и доступным, делает учебу более увлекательной и понятной для студентов."
    },
    {
        id: 981,
        studentName: "Аноним",
        createdAt: '04.04.2024 19:53' as unknown as Date,
        rating: 5,
        comment: 'Агай лучший! Всем советую!'
    },
    {
        id: 982,
        studentName: "Аноним",
        createdAt: '04.04.2024 19:53' as unknown as Date,
        rating: 3,
        comment: 'Немного нудные, но полезные лекции.'
    }
]


export const ProfileDemo: React.FC = () => {
    const router = useRouter();
    const {user} = useUserStore();
    const id = router.query.id! as string;
    const [rating, setRating] = React.useState<number>(0);
    const [reviews, setReviews] = React.useState<FeedbackDemo[]>(mockReviews);

    useEffect(() => {
        const fetchUserReviews = async () => {
            try {
                const response = await userAPI.getUserReviewsDemo();
                const { averageRating, feedbacks } = response;
                setRating(averageRating);
                const newReviews = feedbacks.filter(feedback => !reviews?.some(review => review.id === feedback.id));
                setReviews([ ...newReviews, ...reviews]);
                setRating(averageRating)
            } catch (error) {
                console.error('Error fetching user reviews:', error);
            }
        };

        fetchUserReviews();
    }, []);

    let breadcrumbs: IBreadcrumb[] = [
        {
            link: Routes.org.organizations,
            title: 'Пользователи',
        },
        {
            link: Routes.org.organizations,
            title: 'Султанов Сабит',
        },
    ];

    return (
        <ShellLayout>
            <div className="h-56 relative">
                <ImageLoader
                    src={
                        `/profile/${'profile-gradient-bg.jpg'}`
                    }
                    fallback={
                        <Skeleton className="w-full h-full rounded-md"/>
                    }
                    alt={organization.shortName}
                    priority
                />
            </div>

            <div className="flex gap-12">

                <div className="first-col flex flex-col ml-12 w-3/6 h-3/6">
                    <div className="general-info relative  bottom-14"> {/* todo: GeneralInfo Component*/}

                        <div className="flex items-center gap-4">
                            <Avatar className="w-28 h-28 aspect-square">
                                <AvatarImage src="/profile/sabit.png"/>
                                <AvatarFallback className="text-4xl">MA</AvatarFallback>
                            </Avatar>
                            <div className="mt-4">
                                <Pencil className="cursor-pointer"/>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <h1 className="text-4xl mb-2 font-bold text-[#1C1C1C]">{user?.name + ' ' + user?.surname}</h1>
                            <div>
                                <Dialog>
                                    <DialogTrigger>
                                        <QrCode className="cursor-pointer"/>
                                    </DialogTrigger>
                                    <DialogContent className="w-1/3 h-4/5">
                                        <DialogHeader>
                                            <DialogTitle
                                                className="text-3xl font-bold text-center">{user?.name + ' ' + user?.surname}</DialogTitle>
                                        </DialogHeader>
                                        <DialogDescription className="flex items-center justify-center">
                                            <QRModule data='https://dev.fdbk.kz/rate/123' title='Оцените нынешнее событие'  />
                                        </DialogDescription>
                                        <DialogFooter className="flex items-center justify-center">

                                            <Button variant="secondary" className="flex items-center justify-center">
                                                <Printer/>
                                            </Button>
                                            <Button variant="secondary" className="flex items-center justify-center">
                                                <Download/>
                                            </Button>
                                            <Button variant="secondary" className="flex items-center justify-center">
                                                <Share/>
                                            </Button>
                                            <Button variant="secondary" className="flex items-center justify-center">
                                                <Instagram/>
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-xl">
                    <span className="text-3xl mb-1 mr-2 text-[#A6A6A6]">
                    Преподаватель
                    </span>
                            <RateStar filled index={0} setRating={() => {
                            }} size={20}/>
                                {rating}
                        </div>

                        <div className="flex flex-col gap-2.5 mt-7">

                            <div className="flex items-center gap-1">
                                <Info/>
                                <div className="text-xl mb-1 mr-2">
                                    {user?.summary}
                                </div>
                            </div>


                            <div className="flex items-center gap-1">
                                <Landmark/>
                                <div className="text-xl mb-1 mr-2">
                                    {user?.organization}
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                <BookOpen/>
                                <div className="text-xl mb-1 mr-2">
                                    {user?.specialties}
                                </div>
                            </div>

                        </div>

                        <Separator className="mt-4"/>

                        <div className="flex flex-wrap gap-7 mt-5">

                            <div className="flex items-center gap-2 cursor-pointer">
                                <Instagram/>
                                <div className="text-xl mb-1 mr-2">
                                    {user?.socials?.instagram}
                                </div>
                            </div>


                            <div className="flex items-center gap-2 cursor-pointer">
                                <Mail/>
                                <div className="text-xl mb-1 mr-2">
                                    {user?.socials?.telegram}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer">
                                <Linkedin/>
                                <div className="text-xl mb-1 mr-2">
                                    {user?.socials?.linkedin}
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="impressions flex flex-col "> {/* todo: Impressions Component*/}
                        <div className="impressions-header flex flex-col justify-between">
                            <div className="text-3xl font-bold">
                                Часто пишут
                            </div>
                            <div className="text-xl font-light text-[#A6A6A6]">
                                Сформулировано с помощью AI ✨
                            </div>
                        </div>

                        <div className="impressions-content rounded-xl text-xl mt-4 p-4 bg-[#007AFF40]">
                            {user?.impressions}
                        </div>
                    </div>

                    <div className="reviews mt-7 flex flex-col"> {/* todo: Reviews Component*/}
                        <div className="reviews-header text-3xl font-bold">
                            Отзывы
                        </div>
                        <div className="reviews-list mt-4 flex flex-col gap-4 h-[42vh] overflow-y-auto">
                            {reviews.map((review, index) => (
                                <div key={index} className="review-wrapper flex flex-col rounded-xl p-3 bg-[#F1F5F9]">
                                    <div className="review-content text-xl text-wrap">
                                        {review.comment}
                                    </div>
                                    <div className="review-footer flex justify-between items-center">

                                        <div className="flex gap-2 mt-6">
                                            <CircleAvatar className='w-7 h-7' firstName={review.studentName!} />
                                            <div className="flex flex-col">
                                                <div>
                                                    {review.studentName}
                                                </div>
                                                <div>
                                                    {new Date(review.createdAt).getDay()}.
                                                    {new Date(review.createdAt).getMonth()}.
                                                    {new Date(review.createdAt).getFullYear()} {new Date(review.createdAt).getHours()}:{new Date(review.createdAt).getMinutes()}
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <Rating rating={review.rating}/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="second-col flex flex-col mr-12">
                    <div
                        className="achievements flex flex-col flex-wrap"> {/* todo: Achievements Component - add achievement counter, scroll, steppers, mock link to achievements, decompose*/}

                        <div className="league-wrapper flex gap-4 mt-7">
                            <div className="league-badge">
                                <img src={
                                    `/achievements/${'feedback-badge.png'}`
                                }/>
                            </div>

                            <div className="league-info flex flex-col">
                                <div className="text-4xl mb-2 font-bold text-[#1C1C1C]">
                                    {user?.feed_points} Feedpoints
                                </div>
                                <div className="text-2xl mb-1 mr-2 text-[#A6A6A6]">
                                    Cеребряная лига
                                </div>
                            </div>
                        </div>


                        <div className="achievements-list-wrapper mt-6">

                            <div className="achievements-header flex items-center justify-between">
                                <div className="text-2xl mb-2 font-bold text-[#1C1C1C]">
                                    {user?.achievements?.length} наград
                                </div>
                                <div className="text-l mb-1 mr-2 text-[#A6A6A6] cursor-pointer">
                                    Посмотреть все
                                </div>
                            </div>

                            <div className="achievements-list flex gap-6  w-[50vw] h-[180px] overflow-x-auto">
                                {user?.achievements?.map((achievement, index) => (
                                    <div key={index} className="achievement flex flex-col w-28 h-28">
                                        <img src={`/achievements/${achievement.imgSrc}`}/>
                                        <div className="text-sm text-center">
                                            {achievement.description}
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>

                    </div>

                    <div className="certificates flex flex-col mt-20 gap-8"> {/* todo: Certificates Component*/}

                        <div className="certificates-header flex items-center justify-between">
                            <div className="text-3xl font-bold">
                                Сертификаты
                            </div>
                            <div>
                                <Pencil className="cursor-pointer"/>
                            </div>
                        </div>

                        <div className="certificates-list flex gap-6 w-[50vw] overflow-x-auto">
                            {user?.certificates.map((certificate, index) => (
                                <div key={index} className="certificate flex flex-col gap-4">
                                    <img src={`/certificates/${certificate.imgSrc}`}/>
                                    <div className="text-sm text-center">
                                        {certificate.description}
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                    <div className="work-experience flex flex-col mt-20 gap-8"> {/* todo: WorkExperience Component*/}
                        <div className="work-experience-header flex items-center justify-between">
                            <div className="text-3xl font-bold">
                                Опыт работы
                            </div>
                            <div>
                                <Pencil className="cursor-pointer"/>
                            </div>
                        </div>

                        <div className="work-experience-list flex flex-col gap-6">
                            {user?.work_experience?.map((workExperience, index) => (
                                <div key={index} className="workplace flex  gap-4">

                                    <div className="workplace-images flex flex-col items-center">
                                        <img src={`/work-experience/${workExperience.imgSrc}`} width={64} height={64}/>
                                        {index < (user?.work_experience?.length - 1) &&
                                        <Separator orientation={'vertical'}></Separator>}
                                    </div>

                                    <div className="work-experience-description flex flex-col gap-2">
                                        <div className="text-xl">{workExperience.position}</div>
                                        <div className="text-m">{workExperience.workplace}</div>
                                        <div>{workExperience.duration}</div>
                                        <div className="text-wrap">{workExperience.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>


            {/* <h1 className="text-2xl mb-4 mt-8">Учителя</h1>
      <UserTable role={roles.receiver} org={organization?.ID} /> */}
        </ShellLayout>
    );
};
