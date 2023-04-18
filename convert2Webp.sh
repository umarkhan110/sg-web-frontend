#More info: https://web.dev/codelab-serve-images-webp/
cwebp -q 50 images/flower1.jpg -o images/flower1.webp

#On folders
`for file in images/*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done`
