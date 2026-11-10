import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";

const paragraphs = [
  "so waktu itu aku brg teman\" youth ku lagi di greja. lalu setelah greja kita tiba\" udh ada di toko pecah belah, secara tampilan interior mirip seperti cafeglass. nde sana kita bermain semacam game airsoft tower defense. aku kill musuh banyak, tapi teammates ku banyak yang mati dikilled sm michelle, yang at that time she ngecamp di deket fortress e dee. bcs of that, ak mulai infiltrate buat ngeliminate her. long story short, i caught her and killed her. and i remember i said to her \"u're dead\" and atm the game seperti already ends, she looks bit upset, and then we're walked to my fortress, n my last tower, btw the tower cm kek armour stand e minecraft, n suddenly she grabbed a grenades then she pulled the pin n throw it to my tower, but in reflect ak ngecatch the grenade, but dimulai dr kek ngebounce football. she smiled at me, seemed delight n laughed. then her mom approached us she asked with a smile, her hair agak curly, \"kalian mbahas apa ketok seru? kok ngga diajak yang lain itu (youth).\" at that time yg lain jg udh ngga main n lagi ngumpul liat\" stainless kitchen set.",
  "tbh i feel a bit joy when i woke up, n quite speechless i dreamt abt her. also it was a day after she flew to china for college.",
];

export const Letter = () => (
  <div className="px-4 max-w-lg mx-auto pb-8 pt-6">
    <GlassCard className="px-7 py-10 sm:px-10 sm:py-14" data-testid="letter-card">
      <div className="space-y-7 text-left">
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="font-apple text-[17px] sm:text-lg leading-8 tracking-[-0.01em] text-gray-100/90"
          >
            {p}
          </motion.p>
        ))}
      </div>
    </GlassCard>
  </div>
);
