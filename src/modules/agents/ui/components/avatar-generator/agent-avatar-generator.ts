import { Bot } from "lucide-react";

const avatarColors = [
  "bg-gradient-to-br from-blue-400 to-blue-600",
  "bg-gradient-to-br from-purple-400 to-purple-600",
  "bg-gradient-to-br from-green-400 to-green-600",
  "bg-gradient-to-br from-orange-400 to-orange-600",
  "bg-gradient-to-br from-pink-400 to-pink-600",
  "bg-gradient-to-br from-teal-400 to-teal-600",
  "bg-gradient-to-br from-indigo-400 to-indigo-600",
  "bg-gradient-to-br from-red-400 to-red-600",
  "bg-gradient-to-br from-yellow-400 to-yellow-600",
  "bg-gradient-to-br from-cyan-400 to-cyan-600",
  "bg-gradient-to-br from-emerald-400 to-emerald-600",
  "bg-gradient-to-br from-lime-400 to-lime-600",
  "bg-gradient-to-br from-amber-400 to-amber-600",
  "bg-gradient-to-br from-rose-400 to-rose-600",
  "bg-gradient-to-br from-violet-400 to-violet-600",
  "bg-gradient-to-br from-sky-400 to-sky-600",
  "bg-gradient-to-br from-slate-400 to-slate-600",
  "bg-gradient-to-br from-gray-400 to-gray-600",
  "bg-gradient-to-br from-zinc-400 to-zinc-600",
  "bg-gradient-to-br from-neutral-400 to-neutral-600",
];

const iconCategories = {
  technology: {
    keywords: ["ia"],
    icons: [Bot],
  },
};

const detectCategory = (name: string, instructions?: string): string[] => {
  const text = `${name} ${instructions || ""}`.toLowerCase();
  const matchedCategories: Array<{ category: string; score: number }> = [];

  for (const [category, data] of Object.entries(iconCategories)) {
    let score = 0;
    for (const keyword of data.keywords) {
      if (text.includes(keyword)) {
        const wordBoundaryRegex = new RegExp(`\\b${keyword}\\b`, "i");
        if (wordBoundaryRegex.test(text)) {
          score += 3;
        } else {
          score += 1;
        }
      }
    }
    if (score > 0) {
      matchedCategories.push({ category, score });
    }
  }

  return matchedCategories
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.category);
};

const generateHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

export interface AvatarOption {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  initials: string;
  category: string;
}

export const generateAgentAvatarOptions = (
  name: string,
  instructions?: string,
  seed: number = 0
): AvatarOption[] => {
  if (!name || name.trim().length === 0) {
    return [
      {
        icon: Bot,
        color: avatarColors[0],
        initials: "?",
        category: "default",
      },
    ];
  }

  const cleanName = name.trim().toLowerCase();
  const hash = generateHash(cleanName + seed.toString());
  const detectedCategories = detectCategory(cleanName, instructions);

  const words = cleanName.split(" ").filter((word) => word.length > 0);
  let initials = "";

  if (words.length === 1) {
    initials = words[0].substring(0, 2).toUpperCase();
  } else {
    initials = words
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  const options: AvatarOption[] = [];

  if (detectedCategories.length > 0) {
    detectedCategories.forEach((category, index) => {
      const categoryData =
        iconCategories[category as keyof typeof iconCategories];
      const iconIndex = (hash + index) % categoryData.icons.length;
      const colorIndex = (hash + index * 3) % avatarColors.length;

      options.push({
        icon: categoryData.icons[iconIndex],
        color: avatarColors[colorIndex],
        initials: initials || "?",
        category,
      });
    });
  }

  const allIcons = Object.values(iconCategories).flatMap((cat) => cat.icons);
  while (options.length < 3) {
    const iconIndex = (hash + options.length * 7) % allIcons.length;
    const colorIndex = (hash + options.length * 5) % avatarColors.length;

    options.push({
      icon: allIcons[iconIndex],
      color: avatarColors[colorIndex],
      initials: initials || "?",
      category: "random",
    });
  }

  return options.slice(0, 3);
};

export const generateAgentAvatar = (name: string, seed: number = 0) => {
  const options = generateAgentAvatarOptions(name, undefined, seed);
  return options[0];
};
