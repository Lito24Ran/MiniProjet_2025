// sanabavy fa mamay be tato

import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';
import { productsColumns as originalColumns } from '../data/productsData';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

export default function Products() {
  const [rows, setRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // ✅ Fonction de récupération à réutiliser
  const fetchProduits = async () => {
    try {
      const res = await fetch('http://localhost:1203/produits');
      const data = await res.json();
      setRows(data);
    } catch (err) {
      console.error("Erreur fetch produits:", err);
    }
  };

  // ✅ Appel initial au montage
  useEffect(() => {
    fetchProduits();
  }, []);

  const handleOpenCreate = () => {
    setEditingProduct({ nom: '', prix: '', quantite: '', description: '' });
    setOpenModal(true);
  };

  const handleEdit = (product) => {
  setEditingProduct({ ...product, imgFile: null });
  setOpenModal(true);
};

  const handleClose = () => {
    setOpenModal(false);
    setEditingProduct(null);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:1203/produits/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Erreur suppression");
      await fetchProduits(); // ✅ Recharge propre après suppression
    } catch (err) {
      console.error("Erreur delete:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
  const formData = new FormData();
  formData.append("nom", editingProduct.nom);
  formData.append("prix", editingProduct.prix);
  formData.append("quantite", editingProduct.quantite);
  formData.append("description", editingProduct.description);
  if (editingProduct.imgFile) {
    formData.append("img", editingProduct.imgFile);
  }

  try {
    let res, updatedProduct;

    if (editingProduct._id) {
      // 🔁 Mise à jour
      res = await fetch(`http://localhost:1203/produits/${editingProduct._id}`, {
        method: "PUT",
        body: formData,
      });
    } else {
      // ➕ Création
      res = await fetch("http://localhost:1203/produits", {
        method: "POST",
        body: formData,
      });
    }

    if (!res.ok) throw new Error("Erreur lors de la sauvegarde du produit");

    updatedProduct = await res.json();

    setRows((prev) => {
      const isEditing = !!editingProduct._id;
      if (isEditing) {
        return prev.map((prod) =>
          prod._id === updatedProduct._id ? updatedProduct : prod
        );
      } else {
        return [...prev, updatedProduct];
      }
    });

    handleClose();
  } catch (err) {
    console.error("Erreur:", err);
  }
};

  return (
    <>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleOpenCreate}>
          Nouveau produit
        </Button>
      </Box>

      <CustomTable
        columns={originalColumns}
        rows={rows}
        uniqueKey="_id"
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal open={openModal} onClose={handleClose} aria-labelledby="modal-title">
        <Box sx={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400, bgcolor: 'background.paper',
          boxShadow: 24, p: 4, borderRadius: 2,
        }}>
          <Typography id="modal-title" variant="h6" gutterBottom>
            {editingProduct?._id ? 'Modifier le produit' : 'Créer un nouveau produit'}
          </Typography>

          <TextField
            fullWidth label="Nom" name="nom" margin="normal"
            value={editingProduct?.nom || ''}
            onChange={handleChange}
          />
          <TextField
            fullWidth label="Prix" name="prix" margin="normal" type="number"
            value={editingProduct?.prix || ''}
            onChange={handleChange}
          />
          <TextField
            fullWidth label="Quantité" name="quantite" margin="normal" type="number"
            value={editingProduct?.quantite || ''}
            onChange={handleChange}
          />
          <TextField
            fullWidth label="Description" name="description" margin="normal" multiline rows={3}
            value={editingProduct?.description || ''}
            onChange={handleChange}
          />

          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={(e) =>
              setEditingProduct((prev) => ({
                ...prev,
                imgFile: e.target.files[0],
              }))
            }
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>Annuler</Button>
            <Button variant="contained" color="primary" onClick={handleSave}>
              {editingProduct?._id ? 'Sauvegarder' : 'Créer'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}