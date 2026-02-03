export interface CardBenefit {
    id: number;
    title: string;
    description: string;
    iconPath: string;
}

const cardBenefits: CardBenefit[] = [
    {
        id: 1,
        title: "Phát triển tư duy và định hướng",
        description: "Học viên sẽ được tư vấn kỹ về định hướng học tập, từ đó đề ra quá trình học tập rõ ràng cụ thể.",
        iconPath: "/images/CardBenefits/commit.15991b52.svg"
    },
    {
        id: 2,
        title: "Triết lý giáo dục thực tiễn",
        description: "Chúng tôi luôn ưu tiên việc truyền tải kiến thức và cách học thực tiễn. Để học viên có thể áp dụng trong công việc và học tập một cách thực tiễn nhất.",
        iconPath: "/images/CardBenefits/book.376497f0.svg"
    },
    {
        id: 3,
        title: "Môi trường học thân thiện",
        description: "Tôn trọng cảm xúc học viên, xây dựng không gian học gần gũi và tích cực.",
        iconPath: "/images/CardBenefits/pointer.1c9eb3b4.svg"
    },
    {
        id: 4,
        title: "Tiết kiệm thời gian",
        description: "Học bất cứ lúc nào, không cần đến trung tâm. Giúp bạn linh hoạt giữa học và công việc.",
        iconPath: "/images/CardBenefits/time-save.9c0a3651.svg"
    },
    {
        id: 5,
        title: "Tiết kiệm chi phí",
        description: "Không cần đóng nguyên khóa – học linh hoạt theo tháng, tối ưu ngân sách.",
        iconPath: "/images/CardBenefits/money-save.005f9c94.svg"
    },
    {
        id: 6,
        title: "Phụ huynh dễ theo dõi",
        description: "Phụ huynh có thể dễ dàng đồng hành cùng học viên trong quá trình học thông qua hệ thống học của trung tâm.",
        iconPath: "/images/CardBenefits/parents.254bbaff.svg"
    }
];

export { cardBenefits };