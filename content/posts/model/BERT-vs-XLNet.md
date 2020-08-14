---
title: BERT vs. XLNet
cover: ./language.jpg
date: 2020-08-10
tags: [post,article,Deep Learning, NLP, Transformers, XLNet, BERT, Transfer Learning]
---

[Transformer](https://arxiv.org/pdf/1706.03762.pdf) based model has been key to recent advencement in the field of Natural Language Processing. The reason behind this success is technique called [Transfer Learning](https://en.wikipedia.org/wiki/Transfer_learning#:~:text=Transfer%20learning%20(TL)%20is%20a,when%20trying%20to%20recognize%20trucks.). Although vision practitioners are well-versed with this technique, it is relatively new to the field of NLP. In Transfer Learning, a model (in our case, a Transformer model) is pre-trained on a huge dataset using an unsupervised pre-training objective. This same model is then fine-tuned on the actual task at hand. This approach works exceptionally well, even if you have as small as 500–1000 training samples. 
Further, two pretraining objectives that have been successful for pretraining neural networks used in transfer learning NLP are autoregressive (AR) language modeling and autoencoding (AE). The AR model can only use forward context or backward context at a time whereas AE language model can do both at a same time. BERT is AE whereas GPT is AR language model.

<h2>BERT</h2>

[BERT](https://arxiv.org/pdf/1810.04805.pdf)(Bidirectional Encoder Representations from Transformers ) as its name suggests is a bidirectional autoencoder(AE) language model. It obtained state-of-the-art results on 11 natural language processing tasks when it was published. 

![](/bert.png)

<h2>XLNet</h2>

XLNet is a generalized autoregressive(AR) language model that enables learning bidirectional contexts using [Permutation Language Modeling](https://arxiv.org/pdf/1906.08237.pdf). As per paper, XLNet outperforms BERT on 20 tasks, often by a large margin, including question answering, natural language inference, sentiment analysis, and document ranking.

![](/xlnet.png)

<h2>Which one should you choose?</h2>

BERT and XLNet are both impressive langugage model. Selection should be made on the basis of your task need.

![](/scores.png)


![](/crop.png)



