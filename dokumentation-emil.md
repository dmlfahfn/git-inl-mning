# Durre skapa repot på github
# Durre skapa main branch

# Prep

## Clone repo från github
git clone https://github.com/dmlfahfn/git-inl-mning

## Kolla att jag står i main-branch
git branch

## Om jag inte gör det, byta först till main-branch
git checkout main

## Skapa ny branch emil med samma innehåll som main-branch
git branch emil

## Byta till emil-branch
git checkout emil

## Pusha upp emil-branch till vår remote repo (github)
## Samma som jag clone på
git push origin emil



# Gör mina ändringar i kontaktform.html i emil-branch

## Stage mina ändringar i git
git add kontaktform.html

## Commit mina ändringar med ett msg
git commit -m "Change content in <adress>"

## Push till emil-branch på github
git push origin emil

## Andra i gruppen kan se och kommentera



# Utför mergen

## Hämta hem senaste från remote repo (github)
git fetch

## Om det finns nya ändringar
git pull

## Byt till main-branch lokalt
git checkout main

## Merge innehållet från emil-branch
git merge emil

## Commit vid lyckad merge
git commit -m "Merge emil to main"

## Push main-branch till remote repo (github)




# Testa att reverta till en gammal commit

## Jag gjorde ny commit "Add script.js and modules" (commit ecc172...)
## Jag vill spara denna
git add
git commit -m "Add script.js and modules"

## Jag råkade deletea allt i repot (utom .git-mappen)
## Sen sparar och commmitar (commit 82fab5...)
git add .
git commit -m "Delete all and start over"

## Revert till commiten precis innan 
git revert HEAD ecc172

## VSCode visar commit message i mall som säger:
## Revert "Delete all and start over"
## This reverts commit 82fab5...

## VSCode visar commit message i mall som säger:
## Revert "Add script.js and modules."
## This reverts commit ecc172...



# Åh nej! Jag har råkat reverta en commit för långt bak!
# commit ecc172... skulle inte revertas

## Revert igen, fast denna gången till commiten som tömde mappen
git revert HEAD 82fab5

## VSCode visar commit message i mall som säger:
## Revert "Revert "Add script.js and modules.""
## This reverts commit 98cbe9...

# Trots att jag skrev '82fab5' (3 commits bak) så revertas endast commit '98cbe9' (senaste)
# Git är smart nog att se att dessa två commits ser likadana ut
# Därför revertas endast den senaste commiten, inte de tre senaste
