import { Crown } from "lucide-react"

const PROFILE_URL = "https://www.homestars.com/profile/2813434-eclipse-roofing-ltd"
const WRITE_REVIEW_URL = "https://www.homestars.com/companies/2813434-eclipse-roofing-ltd/reviews/new"

const reviews = [
  {
    title: "Roof, Eavestroughs, and Skylights",
    score: "10/10",
    text: "I would like to, on behalf of our Condo Corporation's Board, thank Eclipse Roofing for the excellent work completed on our building.",
    author: "Director",
    date: "Dec 12, 2024",
  },
  {
    title: "Replace roof and skylights",
    score: "10/10",
    text: "First rate service. Responded quickly to the request for quote and completed the work on schedule and on budget.",
    author: "pneuwmmers",
    date: "Dec 22, 2024",
  },
  {
    title: "Flat roof replacement",
    score: "10/10",
    text: "Professional crew, clean job site, and great communication from start to finish. Highly recommend.",
    author: "Homeowner",
    date: "Nov 3, 2024",
  },
]

export function HomeStarsWidget() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5">
      {/* Header */}
      <div className="flex items-center gap-3 bg-[#54a5db] px-5 py-4">
        <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-extrabold tracking-tight text-[#54a5db]">
          HomeStars
        </span>
        <span className="text-lg font-bold text-white">Eclipse Roofing Ltd</span>
      </div>

      {/* Award */}
      <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50 px-5 py-3">
        <Crown className="h-6 w-6 fill-[#f4b400] text-[#f4b400]" />
        <p className="text-sm text-gray-800">
          <span className="font-bold">Best of 2025</span>
          <span className="text-gray-500"> &ndash; winner 10 times</span>
        </p>
      </div>

      {/* Reviews */}
      <div className="max-h-56 divide-y divide-gray-100 overflow-y-auto">
        {reviews.map((review) => (
          <a
            key={review.title}
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-5 py-4 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-bold text-gray-900">{review.title}</h4>
              <span className="flex-shrink-0 font-bold text-gray-900">{review.score}</span>
            </div>
            <p className="mt-1 line-clamp-2 text-sm text-gray-700">{review.text}</p>
            <p className="mt-1 text-sm">
              <span className="font-medium italic text-[#54a5db]">{review.author}</span>
              <span className="text-gray-400"> &nbsp;{review.date}</span>
            </p>
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 bg-gray-50 px-5 py-4">
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-md bg-[#54a5db] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#4795cc]"
        >
          Read more reviews
        </a>
        <a
          href={WRITE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-md bg-[#54a5db] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#4795cc]"
        >
          Write a review
        </a>
      </div>

      {/* Powered by */}
      <div className="bg-white px-5 py-2 text-center">
        <span className="text-xs text-gray-400">Powered by HomeStars</span>
      </div>
    </div>
  )
}
