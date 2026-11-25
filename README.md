# Potent

Investor page for Potent: the services we offer and the network of specialists who deliver them.
Static [Astro](https://astro.build) site, no backend.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/ (also validates all data)
```

## Add or edit a person

Each person is **one YAML file** in `src/content/people/`. One file per person means two of us can
add people at the same time without merge conflicts. Copy an existing file, name it
`firstname-lastname.yaml`, and fill it in:

```yaml
name: Jane Doe
title: Senior brand designer          # short role line
group: network                        # founder | network
order: 40                             # lower = earlier on the page
location: Tbilisi, Georgia
bio: One or two sentences.
links:                                # all optional
  linkedin: https://www.linkedin.com/in/...
  portfolio: https://...
  behance: https://www.behance.net/...
  instagram: https://www.instagram.com/...
  github: https://github.com/...
services: [branding, graphic-design]  # ids from src/data/services.ts
projects:
  - name: Project name
    client: Brand it was for          # omit for own products
    url: https://live-site            # optional
    caseStudy: https://write-up       # optional
    type: Logo & identity
    sector: Healthcare                # optional
    summary: What it is, one or two sentences.
    role: What this person did        # optional
    services: [branding]
    featured: true                    # show in "Selected work"
    image: /work/project.jpg          # optional screenshot in public/work/
toConfirm:                            # open questions, never shown on the page
  - LinkedIn
```

Services live in `src/data/services.ts`. If a file uses an unknown service id or a malformed URL,
`npm run build` fails and names the file and field.

## Working together

We both push straight to `main`:

```bash
git pull --rebase     # replay your commits on top of the other person's
npm run build         # make sure it still builds
git push
```

Commit small and often. Never force-push.
