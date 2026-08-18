# Contributing to Hyderabad Startup Map

Thank you for your interest in contributing to the Hyderabad Startup Map project! This document provides guidelines and instructions for contributing.

## 🎯 Ways to Contribute

- **Add Startups:** Submit new startup data for Hyderabad ecosystem
- **Add Founders:** Expand the founder directory
- **Add Investors:** Contribute investor and VC information
- **Add Jobs:** Submit new job listings
- **Bug Fixes:** Help us fix issues and bugs
- **Features:** Propose and implement new features
- **Documentation:** Improve docs, guides, and READMEs
- **UI/UX:** Design improvements and better user experience

## 📋 Getting Started

### 1. Fork the Repository

```bash
git clone https://github.com/YOUR_USERNAME/hyd-startups-map.git
cd hyd-startups-map
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Use one of these prefixes:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `data/` - Data updates
- `chore/` - Maintenance and configuration

### 3. Make Your Changes

#### Adding Startups

Edit `data/hyderabad-startups.json`:

```json
{
  "slug": "company-name",
  "name": "Company Name",
  "tagline": "Brief description",
  "industry": "Industry",
  "stage": "Series A",
  "location": "HITEC City",
  "foundedYear": 2020,
  "funding": "$10M+",
  "employees": "50-100",
  "description": "Detailed description",
  "tags": ["Tag1", "Tag2"],
  "website": "https://example.com",
  "linkedin": "https://www.linkedin.com/company/example",
  "founders": ["Founder 1", "Founder 2"]
}
```

#### Adding Founders

Add to the `founders` array:

```json
{
  "slug": "firstname-lastname",
  "name": "First Last",
  "company": "Company Name",
  "role": "Co-founder",
  "linkedin": "https://www.linkedin.com/in/firstname-lastname"
}
```

#### Adding Jobs

Add to the `jobs` array:

```json
{
  "slug": "role-company",
  "title": "Job Title",
  "company": "Company Name"
}
```

#### Adding Investors

Add to the `investors` array:

```json
{
  "name": "Investor Name",
  "focus": "Focus Area",
  "location": "City"
}
```

### 4. Test Your Changes

```bash
npm run dev
# Test at http://localhost:3000
```

### 5. Commit Your Changes

```bash
git add .
git commit -m "type: Brief description of changes

- Detailed change 1
- Detailed change 2
- Detailed change 3"
```

Commit message format:
```
type: Subject (max 50 chars)

Body (max 72 chars per line)
- Point 1
- Point 2

Fixes #123
```

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

- Go to https://github.com/saisuchindra/hyd-startups-map
- Click "New Pull Request"
- Select your branch
- Add a clear title and description
- Link any related issues

## 📝 Pull Request Guidelines

### PR Title Format

```
[Type] Brief Description

Types:
- [Feature] New feature
- [Fix] Bug fix
- [Docs] Documentation
- [Data] Data update
- [Chore] Maintenance
```

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Changes
- Change 1
- Change 2
- Change 3

## Why?
Why are these changes needed?

## Related Issues
Closes #123

## Checklist
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] Code follows style guide
- [ ] No breaking changes
```

## 🎨 Code Style

- **TypeScript:** Use strict types
- **React:** Use functional components and hooks
- **Naming:** Use camelCase for variables, PascalCase for components
- **Comments:** Add comments for complex logic
- **Formatting:** Use Prettier (run `npm run format`)

## 🧪 Testing

```bash
# Run linting
npm run lint

# Format code
npm run format

# Build for production
npm run build
```

## 📚 Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for functions
- Document API changes
- Add inline comments for complex logic

## 🐛 Bug Reports

Include:
- Clear description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos if applicable
- Environment details

## 💬 Code Review

- Be respectful and constructive
- Ask questions instead of making demands
- Suggest improvements, don't demand them
- Acknowledge good work

## ✅ Contribution Checklist

- [ ] Code changes are tested
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] No console errors/warnings
- [ ] Follows code style guide
- [ ] All tests passing
- [ ] Branch is up to date with main

## 🚀 After Merge

- Your changes will be deployed to production
- You'll be added to the contributors list
- Thank you for your contribution! 🎉

## ❓ Questions?

- Open an issue with the question label
- Ask in discussions
- Email saisuchindra@gmail.com

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Happy Contributing! 🚀**
