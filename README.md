# Feedback Board

This is a Next.js project which uses Payload CMS V3 to create a feedback board.
Users are able to submit their feedback. Feedbacks are stored in a collection. It uses hcaptcha to prevent spam.

![Preview](https://i.imgur.com/juz16rx.jpeg)

## Getting Started

Copy the `.env.local.example` and setup the necessary variables.

Run the development server:

```bash
pnpm install   // install packages
pnpm run dev   // run development server

pnpm run lint  // run eslint
pnpm run fix   // auto-fix the linting issues
```

Make sure to add categories first, categories are ordered based on order field and first one is the default one for feedback submission.
