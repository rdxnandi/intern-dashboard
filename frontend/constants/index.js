import { Trophy, Users, Award, Medal } from "lucide-react";

const mockData = [
  {
    id: 1,
    title: "Complete onboarding training",
    completed: true,
    dueData: "2024-08-01",
  },
  {
    id: 2,
    title: "Review project documentation",
    completed: false,
    dueData: "2024-08-05",
  },
  {
    id: 3,
    title: "Attend team standup meeting",
    completed: false,
    dueData: "2024-08-03",
  },
  {
    id: 4,
    title: "Submit weekly report",
    completed: false,
    dueData: "2024-08-04",
  },
];

const rewards = [
  {
    id: 1,
    title: "Top Fundraiser",
    description: "Raised ₹10,000+",
    earned: true,
    icon: Trophy,
  },
  {
    id: 2,
    title: "Referral Master",
    description: "Get 10+ referrals",
    earned: true,
    icon: Users,
  },
  {
    id: 3,
    title: "Team Player",
    description: "Complete team challenge",
    earned: false,
    icon: Award,
  },
  {
    id: 4,
    title: "Goal Crusher",
    description: "Exceed monthly target",
    earned: false,
    icon: Medal,
  },
];

export { mockData, rewards };
